$(document).ready(function(){
    $("#gnb>li, #mBack").hover(function(){
        $(".submenu,#mBack").stop().slideDown();
    },function(){
        $(".submenu,#mBack").stop().slideUp();
    });

    $("#slide>a").each(function(index){
        if(index==0){
            $("#indicator").append('<li class="current">'+ (index+1)   +'</li>');
            
        }else{
            $("#indicator").append('<li>'+   (index+1)   +'</li>');
        }
    });

    var idx=0;
    var ms;
    var itemCnt = $("#slide>a").length - 1;
    mainslide();
    
    $("#slide").hover(function(){
        clearInterval(ms);
    },function(){
        mainslide();
    })

    


    

    tab();
    indicatior();

    $("#url").change(function(){
        open($(this).val());
    })

    function mainslide(){
        ms = setInterval(function(){
            $("#slide>a").eq(idx).fadeOut();
            $("#indicator>li").eq(idx).removeClass();
            if(idx<itemCnt){
                idx++;
            }else{
                idx=0;
            }
            $("#slide>a").eq(idx).fadeIn();
            $("#indicator>li").eq(idx).addClass("current");
        },3000);
    }

    function tab(){
        $(".pop").click(function(){
            $("#popup").fadeIn(); 
        });
        
        $(".close").click(function(){
        $("#popup").fadeOut(); 
        })
    }
    
    function indicatior(){
        $(".prev").click(function(){
            $("#slide>a").eq(idx).stop().fadeOut();
            $("#indicator>li").eq(idx).removeClass();
                if(idx>0){
                    idx--;
                }else{
                    idx=itemCnt;
                }
                $("#slide>a").eq(idx).stop().fadeIn();
                $("#indicator>li").eq(idx).addClass("current");
        })
    
        $(".next").click(function(){
            $("#slide>a").eq(idx).stop().fadeOut();
            $("#indicator>li").eq(idx).removeClass();
                if(idx<itemCnt){
                    idx++;
                }else{
                    idx=0;
                }
                $("#slide>a").eq(idx).stop().fadeIn();
                $("#indicator>li").eq(idx).addClass("current");
        })
    }



});


$(document).ready(function(){
        
    let idx = 0;
    let vs;
    vSlide();

    $("#gnb>li").hover(function(){
        $(".submenu").stop().slideDown();
    },function(){
        $(".submenu").stop().slideUp();
        
    });


    $(".menu").click(function(){
        $("header>nav").fadeToggle();
    });
    



    $("#vSlide").on('wheel',function(e){
        let dir = e.originalEvent.wheelDelta;
        if(dir<0){
            let dist = $(window).height();
            $(document).scrollTop(dist);
        }else{
            $(document).scrollTop(0);
        }
    });
    
    $(document).scroll(function(){
        let winH = $(window).height();
        let docTop = $(document).scrollTop();
        if(docTop>=winH){
            $("nav").fadeIn(400);
            $("header").addClass("fixedHeader");
        }else{
            $("nav").fadeOut(400);
            $("header").removeClass("fixedHeader");
        }
    });
    

    $(".pause").click(function(){
        pause();
        $(".scene").eq(idx).stop(false,true).show();
    })
    

    $(".play").click(function(){
        vSlide();
        $(".play").hide()
        $(".pause").show();
    })


    $(".prev").click(function(){
        clearInterval(vs);
        $(".scene").eq(idx).stop(false,true).fadeOut();
    
        if(idx>0){
            idx--;
        }else{
            idx=2;
        }
        pause();
    })
    

    $(".next").click(function(){
        clearInterval(vs);
        $(".scene").eq(idx).stop(false,true).fadeOut();
    
        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        pause();
    })

    function pause(){
        $(".scene").eq(idx).stop(false,true).show();
        $(".pause").hide()
        $(".play").show();
    }

    function vSlide(){
        vs = setInterval(function(){

            $(".scene").eq(idx).fadeOut(2000);
            if(idx<2){
                idx++;
            }else{
                idx=0;
            }
            $(".scene").eq(idx).delay(4000).fadeIn(2000);
        },8000);
    }
    


});
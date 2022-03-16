$(document).ready(function(){
    $("#gnb>li").hover(function(){

        $(".submenu",this).stop().slideToggle();
    },function(){
        $(".submenu",this).stop().slideToggle();
    });


    var idx=0;
    setInterval(function(){
        $("#slide>a").eq(idx).fadeOut();
        
        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>a").eq(idx).fadeIn();
    },3000)

    $("#url").change(function(){
        open($(this).val());
    });

    $(".pop").click(function(){
        $("#modal").fadeIn();
    })
    $(".close").click(function(){
        $("#modal").hide();
    });

})



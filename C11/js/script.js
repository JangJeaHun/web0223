$(document).ready(function(){


    $("#gnb>li").hover(function(){
        $(".submenu",this).stop().slideToggle();
        
    },function(){
        $(".submenu",this).stop().slideToggle(0);
    })

    var idx=0;

    setInterval(function(){
        $("#slide>a").eq(idx).animate({
            left:"-100%"
        },400).animate({
            left:"100%"
        },0)

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>a").eq(idx).animate({
            left:0
        },400)
    },3000)

    $(".pop").click(function(){
        $("#popup").fadeIn();
    })
    $(".close").click(function(){
        $("#popup").hide();
    })


})



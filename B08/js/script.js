$(document).ready(function(){
    $("#gnb>li").hover(function(){
        $(".submenu").stop().slideToggle();
        $("#mBack").stop().slideToggle()
    },function(){
        $(".submenu").stop().slideToggle();
        $("#mBack").stop().slideToggle()
    })

    var idx = 0;
    setInterval(function(){
        $("#slide>a").eq(idx).animate({
            left : "-100%"
        },400).animate({
            left : "100%"
        },0)

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>a").eq(idx).animate({
            left : 0
        })
    },3000)

    $(".pop").click(function(){
        $("#modal").fadeIn();
    })
    $(".close").click(function(){
        $("#modal").hide();
    })
})

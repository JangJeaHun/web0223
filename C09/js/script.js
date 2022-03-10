$(document).ready(function(){

    $("#gnb>li").hover(function(){
        $(".submenu",this).stop().slideToggle();
    },function(){
        $(".submenu",this).stop().slideToggle();
    })
    var idx=0;
    setInterval(function(){

        $("#slide>a").eq(idx).stop().fadeOut();
        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>a").eq(idx).stop().fadeIn();
    },2000)

    $("#tab>li").click(function(){
        var num = $(this).index();
        $("#recent>div").eq(num).show().siblings("div").hide();
        $(this).addClass("selected").siblings("li").removeClass();

    })

    $(".pop").click(function(){
        $("#popup").show();
    })
    $(".close").click(function(){
        $("#popup").hide();
    })

})



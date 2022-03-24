$(document).ready(function(){
    $("#gnb>li").hover(function(){
        $(".submenu").stop().slideToggle();
        $("#mBack").stop().slideToggle();
    },function(){
        $(".submenu").stop().slideToggle();
        $("#mBack").stop().slideToggle();
    })



    var idx = 0;
    setInterval(function(){
        $("#slide>a").eq(idx).stop().animate({
            left:"-100%"
        }).animate({
            left:"100%"
        },0)

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>a").eq(idx).stop().animate({
            left: 0
        })
        
    },2000)
    
    $("#tab>li").click(function(){
        var idx = $(this).index();
        
        $(this).addClass("selected").siblings("li").removeClass();
        $("#recent>div").eq(idx).show().siblings("div").hide();
    })

    $(".pop").click(function(){
        $("#popup").show();
    })
    
    $(".close").click(function(){
        $("#popup").hide();  
    })

    
})
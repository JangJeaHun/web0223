$(document).ready(function(){
    $("#gnb>li").hover(function(){
        $(".submenu",this).stop().fadeToggle();
    },function(){
        $(".submenu",this).stop().fadeToggle();
    })

    let idx=0;
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
        })
    },2000)

    $(".pop").click(function(e){
        e.preventDefault();
        $("#modal").fadeIn();
    })
    $(".close").click(function(){
        $("#modal").hide();
    })

})
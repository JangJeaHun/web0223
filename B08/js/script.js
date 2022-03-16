$(document).ready(function(){
    $("#gnb>li,#mBack").hover(function(){
        $(".submenu").stop().slideDown();
        $("#mBack").stop().slideDown();
    },function(){
        $(".submenu").stop().slideUp();
        $("#mBack").stop().slideUp();
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
    
    $("#url").change(function(){
        open($(this).val());
    })

    $(".pop").click(function(){
        $("#modal").fadeIn();
    })
    $(".close").click(function(){
        $("#modal").hide();
    })
})

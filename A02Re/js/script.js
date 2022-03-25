$(document).ready(function(){


    $("#gnb>li,#mBack").hover(function(){
        $(".submenu,#mBack").stop().slideToggle();
    },function(){
        $(".submenu,#mBack").stop().slideToggle();
    })

    var idx = 0;

    setInterval(function(){
        $("#slide>a").eq(idx).animate({left:"-100%"}).animate({left:"100%"})

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>a").eq(idx).animate({left:0})

    },3000)












    $("#family").change(function(){
        var url = $(this).val();
        window.open(url);
    });
})
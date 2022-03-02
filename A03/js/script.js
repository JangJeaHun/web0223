$(document).ready(function(){
hover();
slide();
tab();
popup();
});


function hover(){
    $("#gnb>li").hover(function(){
        $(".submenu",this).stop().slideDown();
    },function(){
        $(".submenu",this).stop().slideUp();
    })
}

function slide(){
    var idx=0;
    setInterval(function(){
        $("#slide>a").eq(idx).fadeOut(300);

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }

        $("#slide>a").eq(idx).fadeIn(300);

    },3000);
}


function tab(){
    $("#tab>li").click(function(){

        var idx = $(this).index();
        $("#content>div").eq(idx).show().siblings("div").hide();
        $(this).addClass("selected").siblings("li").removeClass();


    })
}
function popup(){
    $(".pop").click(function(){
        $("#popup").fadeIn();
    })
    $(".close").click(function(){
        $("#popup").fadeOut();
    })
}
$(document).ready(function(){
    
menu();
slide();
tab();
popup();
})

function menu(){
    $("#gnb>li").hover(function(){
        $(".submenu").stop().slideToggle();
    },function(){
        $(".submenu").stop().slideToggle();
    })
}

function slide(){
    var idx=0;
    setInterval(function(){
        $("#slide>a").eq(idx).animate({
            left:"-100%"
        },400)  .animate({
            left:"100%"
        },0);
    
        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
    
        $("#slide>a").eq(idx).animate({
            left:"0"
        },400);
    },3000);
}
function tab(){
    $("#tab>li").click(function(){
        var idx=$(this).index();
        $(this).addClass("selected").siblings("li").removeClass();
        $("#recent>div").eq(idx).show().siblings("div").hide();
    });
};

function popup(){
    $(".pop").click(function(){
        $("#popup").show();
    })
    $(".close").click(function(){
        $("#popup").hide();
    })
}
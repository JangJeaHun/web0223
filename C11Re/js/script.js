$(document).ready(function(){
    $("#gnb>li").hover(function(){
        $(".submenu",this).stop().slideToggle();
    },function(){
        $(".submenu",this).stop().slideToggle(0);
    })
    
    var idx = 0;
    setInterval(function(){
        $("#slide>a").eq(idx).stop().animate({left:"-100%"}).animate({left:"100%"},0)

        if(idx<2){
            idx++;
        }else{
            idx =0;
        }
        $("#slide>a").eq(idx).stop().animate({left:0})
    },3000)

    $(".pop").click(function(){
        $("#popup").show()
    })
    $(".close").click(function(){
        $("#popup").hide()
    })

})

// $(document).ready(function(){
//     $(".nav>ul>li").hover(function(){
//         $(".submenu").stop().slideToggle();
//     },function(){
//         $(".submenu").stop().slideToggle();
//     });
// });
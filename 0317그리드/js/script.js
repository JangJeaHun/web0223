$(document).ready(function(){
    $("#mainSlide").mSlide(5, false);
    $("#miniSlide").mSlide(3, true);

    let wheelOff = false;

    $("#mainSlide").on("wheel",function(e){
        let dir = e.originalEvent.wheelDelta;
        if(dir<0 && !wheelOff){
            $(document).scrollTop($(window).height());
            wheelOff = true;
        }
        if(dir>0 && !wheelOff){
            $(document).scrollTop($(window).height(0));
            wheelOff = true;
        }
        // alert(dir);
    });
    setInterval(function(){
        wheelOff = false;
    },500)

    $("#innerNew").itemSlide(3);

});
$.fn.itemSlide = function(interval){
    let obj = $(this);
    let lastX, is;
    let imgW = $("a>img",this).eq(0).width() + 10;



    $("a",this).each(function(index){
        $(this).css("left",index*imgW);
        lastX= index*imgW;
    });

    if($(window).width() >= 768){
        iSlide();
    };

    $("#newArrival").on("touchstart",function(e){
        clearInterval(is);
        startX = e.originalEvent.touches[0].pageX;

        
    });

    function iSlide(){
        is = setInterval(function(){
            $("a",obj).each(function(){
                $(this).animate({
                    left:"-=" + imgW 
                })
            let leftX = parseInt($(this).css("left"));
            if(leftX <= 0){
                $(this).animate({left:lastX},0);
            }
            });
        },interval*1000)
    }



    
    
};




$.fn.mSlide = function(interval){
    let idx=0;
    let obj = $(this);
    let maxIdx= $('a',obj).length -1 ;
    let ms;

    $('a',obj).each(function(){
        $(".indi",obj).append('<li></li>')
    });
    $(".indi>li",obj).eq(0).addClass("current");
    
    slide();


    $(".next").click(function(){
        $('a',obj).eq(idx).stop(false,true).animate({left:"-100%"}).animate({left:"100%"},0);
            $(".indi>li",obj).eq(idx).removeClass("current");
            $("a>h2",obj).stop(false,true).eq(idx).slideUp();
            $("a>p",obj).stop(false,true).eq(idx).fadeOut();

            if(idx<maxIdx){
                idx++;
            }else{
                idx=0;
            }

            $('a',obj).eq(idx).stop(false,true).animate({left:0})
            $(".indi>li",obj).eq(idx).addClass("current");
            $("a>h2",obj).stop(false,true).eq(idx).slideDown();
            $("a>p",obj).stop(false,true).eq(idx).fadeIn();
    });


    $(".prev").click(function(){
        $('a',obj).eq(idx).stop(false,true).animate({left:"100%"})
        $(".indi>li",obj).eq(idx).removeClass("current");
        $("a>h2",obj).stop(false,true).eq(idx).slideUp();
        $("a>p",obj).stop(false,true).eq(idx).fadeOut();

        if(idx>0){
            idx--;
        }else{
            idx=maxIdx;
        }

        $('a',obj).eq(idx).stop(false,true).animate({left:"-100%"},0).animate({left:0});
        $(".indi>li",obj).eq(idx).addClass("current");
        $("a>h2",obj).stop(false,true).eq(idx).slideDown();
        $("a>p",obj).stop(false,true).eq(idx).fadeIn();
    });



    function slide(){
        ms = setInterval(function(){
            $('a',obj).eq(idx).delay(800).animate({left:"-100%"}).animate({left:"100%"},0);
            $(".indi>li",obj).eq(idx).removeClass("current");

            // if(!stopText){
                
            // }
            $("a>h2",obj).eq(idx).slideUp();
            $("a>p",obj).eq(idx).delay(400).fadeOut();
            
            
            
            
            if(idx<maxIdx){
                idx++;
            }else{
                idx=0;
            }
            

            
            
            $('a',obj).eq(idx).delay(800).animate({left:0})
            $(".indi>li",obj).eq(idx).addClass("current");
            $("a>h2",obj).eq(idx).delay(1200).slideDown();
            $("a>p",obj).eq(idx).delay(1600).fadeIn();
        },interval*1000)

    }
    
}
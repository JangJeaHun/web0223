$(document).ready(function () {
    if($(window).width() >= 768) {
        $('#gnb>li').hover(function() {
            $('.submenu', this).stop().slideDown();
        }, function() {
            $('.submenu', this).stop().slideUp();
        });
        
        $(document).scroll(function() {
            if($(this).scrollTop() < $(window).height()) {
                $('header').removeClass();
            } else {
                $('header').addClass('headerBack');
            }
        });
    }
    
    $('.showMenu').click(function() {
        $('header>nav').animate({left: 0});
    });

    $('.close').click(function() {
        $('header>nav').animate({left: '-80%'});
    });

    //터치 이벤트를 이용하여 swipe효과 구현
    $(window).on("touchstart",function(e){});
    $(window).on("touchend",function(e){});



    $('#mainSlide').mSlide(5, false);
    $('#miniSlide').mSlide(3, true);

    let wheelOff = false;
    $('#mainSlide').on('wheel', function(e) {
        let dir = e.originalEvent.wheelDelta;
        if(dir<0 && !wheelOff) {
            $(document).scrollTop($(window).height());            
            wheelOff = true;
        }
    });

    setInterval(function() {wheelOff = false}, 500);

    $('#innerNew').itemSlide(3);

    $(document).on('mousemove', function(e){
        let posX = e.originalEvent.clientX;
        let posY = e.originalEvent.clientY;
        $('#pos').animate({left: posX+10, top: posY+10}, 0);
    });

    $('img').mouseover(function () { 
        $('#pos').text($(this).attr('alt'));//alt 속성 값을 얻어오기get
    });

    $('img').mouseout(function () { 
        $('#pos').empty();//비우기
    });
});

$.fn.itemSlide = function(interval) {
    let obj = $(this);
    let lastX, is, startX, moveX;
    let imgW = $('a>img', this).eq(0).width() + 10;
    $('a', this).each(function(index) {
        $(this).css('left', index*imgW);//set
        lastX = index*imgW;
    });

    if($(window).width() >= 768) {iSlide()}

    $(this).parent().on('touchstart', function(e) {
        clearInterval(is);
        startX = e.originalEvent.touches[0].pageX;
    });

    $(this).parent().on('touchmove', function(e) {
        moveX = e.originalEvent.changedTouches[0].pageX;
        let dist = moveX - startX;
        startX = moveX;
        $('a', obj).each(function() {
            if(startX < 0) {
                $(this).animate({left: '-='+Math.abs(dist)}, 0);
            }
            if(startX > 0) {
                $(this).animate({left: '+='+dist}, 0);
            }
        });
    });

    function iSlide() {
        is = setInterval(function() {
            $('a', obj).each(function() {
                $(this).animate({left: '-='+imgW});
                let leftX = parseInt($(this).css('left'));//get
                 if(leftX <= 0) {
                     $(this).animate({left: lastX}, 0);
                 }
            });
        }, interval*1000);
    }
    
}

$.fn.mSlide = function(interval, stopText) {
    let idx = 0;
    let obj = $(this);
    let maxIdx = $('a', obj).length - 1;
    let ms;

    $('a', obj).each(function() {$('.indi', obj).append('<li></li>')});
    $('.indi>li', obj).eq(0).addClass('current');
    $(obj).hover(function() {clearInterval(ms);}, function() {slide()});

    if(stopText){$('a', obj).children().show()}
    
    slide();

    $('.prev', obj).click(function() {
        $('a', obj).eq(idx).stop(false, true).delay(800).animate({left: '100%'});
        $('.indi>li', obj).eq(idx).removeClass('current');
        $('a>h2', obj).eq(idx).stop(false, true).slideUp();
        $('a>p', obj).eq(idx).stop(false, true).delay(400).fadeOut();
        idx==0?idx=maxIdx:idx--;
        $('a', obj).eq(idx).stop(false, true).animate({left: '-100%'}, 0).delay(800).animate({left: 0});
        $('.indi>li', obj).eq(idx).addClass('current');
        $('a>h2', obj).eq(idx).stop(false, true).delay(1200).slideDown();
        $('a>p', obj).eq(idx).stop(false, true).delay(1600).fadeIn();
    });

    $('.next', obj).click(function() {
        $('a', obj).eq(idx).stop(false, true).delay(800).animate({left: '-100%'}).animate({left: '100%'}, 0);
        $('.indi>li', obj).eq(idx).removeClass('current');
        $('a>h2', obj).eq(idx).stop(false, true).slideUp();
        $('a>p', obj).eq(idx).stop(false, true).delay(400).fadeOut();
        idx==maxIdx?idx=0:idx++;
        $('a', obj).eq(idx).stop(false, true).delay(800).animate({left: 0});
        $('.indi>li', obj).eq(idx).addClass('current');
        $('a>h2', obj).eq(idx).stop(false, true).delay(1200).slideDown();
        $('a>p', obj).eq(idx).stop(false, true).delay(1600).fadeIn();
    });

    function slide() {
        ms = setInterval(function() {
            $('a', obj).eq(idx).delay(800).animate({left: '-100%'}).animate({left: '100%'}, 0);
            $('.indi>li', obj).eq(idx).removeClass('current');
            if(!stopText) {
                $('a>h2', obj).eq(idx).slideUp();
                $('a>p', obj).eq(idx).delay(400).fadeOut();
            }
            idx==maxIdx?idx=0:idx++;
            $('a', obj).eq(idx).delay(800).animate({left: 0})
            $('.indi>li', obj).eq(idx).addClass('current');
            if(!stopText) {
                $('a>h2', obj).eq(idx).delay(1200).slideDown();
                $('a>p', obj).eq(idx).delay(1600).fadeIn();
            }
        }, interval*1000);
    }    
}
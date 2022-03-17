$(document).ready(function () {
    $('#mainSlide').mSlide(5, false);
    $('#miniSlide').mSlide(3, true);
});

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
$(document).ready(function(){


    $('#gnb>li').hover(function() {
        $('.submenu').stop().slideDown();
        $('#mBack').stop().slideDown();
    }, function() {
        $('.submenu').stop().slideUp();
        $('#mBack').stop().slideUp();
    });

    $('.pop').click(function(event){
        $('#modal').fadeIn();
        // event.preventDefault();
        return false
    });

    // event.preventDefault(); 이나  return false 사용가능.
       
    $('.close').click(function(){
        $('#modal').fadeOut();
    });
});
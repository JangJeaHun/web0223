$(document).ready(function(){


    $('#gnb>li').hover(function() {
        $('.submenu').stop().slideDown();
        $('#mBack').stop().slideDown();
    }, function() {
        $('.submenu').stop().slideUp();
        $('#mBack').stop().slideUp();
    });

    $('.pop').click(function(event){
        event.preventDefault();
        $('#modal').fadeIn();
    });
    $('.close').click(function(){
        $('#modal').fadeOut();
    });
});
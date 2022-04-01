$(document).ready(function () {
    $('#gnb>li').hover(function() {
        $('a>.fa', this).toggle();
        $('.submenu', this).stop().show();
    }, function() {
        $('a>.fa', this).toggle();
        $('.submenu', this).stop().hide();
    });

    $('#depth1>li').hover(function() {
        let index = $(this).index();
        $('a>.fa', this).toggle();
        $('.depth2', this).css({left: index * -160}).stop().show();
    }, function() {
        $('a>.fa', this).toggle();
        $('.depth2', this).stop().hide();
    });
});
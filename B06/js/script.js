$(document).ready(function(){

    $("#gnb>li").hover(function(){
        $(".submenu").stop().slideDown();
        $("#mBack").stop().slideDown();
    },function(){
        $(".submenu").stop().slideUp();
        $("#mBack").stop().slideUp();
    });


});
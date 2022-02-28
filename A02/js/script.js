$(document).ready(function(){


    $('#gnb>li').hover(function() {
        $('.submenu').stop().slideDown();
        $('#mBack').stop().slideDown();
    }, function() {
        $('.submenu').stop().slideUp();
        $('#mBack').stop().slideUp();
    });

    var idx=0;
    setInterval(function(){
    $('#slide>a').eq(idx).animate({
        left:"-100%",
    },400).animate({left:"100%"},0);

    if (idx < 2) {
        idx++;
    } else {
        idx = 0;
    }


    $('#slide>a').eq(idx).animate({
        left:"0",
    },400);
   
    },3000);
    
    $("#url").change(function(){
        open($(this).val());


    })



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

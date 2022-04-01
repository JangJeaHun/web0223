$(document).ready(function(){
    
    $("#gnb>li").hover(function(){

    $(".submenu",this).stop().show();
    $("a> .fa-arrow-circle-down",this).hide();  
    $("a> .fa-arrow-circle-up",this).show();  
    },function(){
    $(".submenu",this).stop().hide();
    $("a> .fa-arrow-circle-down",this).show();  
    $("a> .fa-arrow-circle-up",this).hide();  

    })

  
    $("#depth1>li").hover(
        function(){
            $(".depth2",this).stop().show();
        },function(){
            $(".depth2",this).stop().hide();
        }
    )

});
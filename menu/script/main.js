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

    var idx = $(this).index();

    var color = ["bisque","blueviolet","green","orange"];

    var col = color[idx];

    $("#depth1>li").hover(

        function(){
            $(".depth2",this).stop().show().css({backgroundColor:col});
        },function(){
            $(".depth2",this).stop().hide();
        }
    )

});
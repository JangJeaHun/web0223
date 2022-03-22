$(document).ready(function(){
  $("#gnb>li").hover(function(){
    $(".submenu").stop().slideToggle();
  },function(){
    $(".submenu").stop().slideToggle();
  })
  
  var idx=0;
  setInterval(function(){
    $("#slide>a").eq(idx).animate({top:"-100%"}).animate({top:"100%"},0)
    
    if(idx<2){
      idx++;
    }else{
      idx=0;
    }
    $("#slide>a").eq(idx).animate({top:0})
  },3000)
 

  $("#tab>li").click(function(){
    var idx = $(this).index();
    $("#recent>div").eq(idx).show().siblings("div").hide();
    $("#tab>li").eq(idx).addClass("selected").siblings("li").removeClass();
  })

  $(".pop").click(function(){
    $("#popup").fadeIn();
  })
  g
  $(".close").click(function(){
    $("#popup").hide();
  })


})
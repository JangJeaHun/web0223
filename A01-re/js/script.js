$(document).ready(function(){

  $("#gnb>li").hover(function(){
    $(".submenu").stop().slideToggle();
},function(){
    $(".submenu").stop().slideToggle();
  })

  var idx = 0;
  setInterval(function(){
      $("#slide>a").eq(idx).animate({
          top:"-100%"
        },400).animate({
         top:"100%"
      },0)

      if(idx<2){
          idx++;
      }else{
          idx=0;
      }
      $("#slide>a").eq(idx).animate({top:0},400)
  },3000)

    $(".pop").click(function(){
    $("#popup").show();
    })

    $(".close").click(function(){
        $("#popup").hide();
    })

    $("#tab>li").click(function(){
        var idx = $(this).index();

        $(this).addClass("selected").siblings().removeClass();
        $("#recent>div").eq(idx).show().siblings("div").hide();

    })





});
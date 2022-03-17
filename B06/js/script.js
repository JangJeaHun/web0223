$(document).ready(function(){
  $("#gnb>li").hover(function(){
    $(".submenu").stop().slideDown();
    $("#mBack").stop().slideDown();
  },function(){
    $(".submenu").stop().slideUp();
    $("#mBack").stop().slideUp();
  })

  idx=0;
  setInterval(function(){
    $("#slide>a").eq(idx).animate({
      top:"-100%"
    }).animate({
      top:"100%"
    },0)
    
    if(idx<2){
      idx++;
    }else{
      idx=0;
    }
    $("#slide>a").eq(idx).animate({
      top:0
    })
  },2000)

  $(".pop").click(function(){
    $("#modal").fadeIn();
  })
  $(".close").click(function(){
    $("#modal").hide();
  })


  

})
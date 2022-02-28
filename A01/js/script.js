$(document).ready(function () {
  hover();
  slide();
  popup();
    tab();
});

function slide() {
  var idx = 0;
  setInterval(function () {
    $("#slide>a")
      .eq(idx)
      .animate(
        {
          top: "-100%",
        },
        400
      )
      
      .animate({ top: "100%" }, 0);

    if (idx < 2) {
      idx++;
    } else {
      idx = 0;
    }

    $("#slide>a").eq(idx).animate(
      {
        top: "0%",
      },
      400
    );
  }, 3000);
}

function popup() {
  $(".pop").click(function () {
    $("#popup").fadeIn();
  });

  $(".close").click(function () {
    $("#popup").hide();
  });
}


function hover() {
  $("#gnb>li").hover(
    function () {
      $(".submenu", this).stop().slideDown();
    },
    function () {
      $(".submenu", this).stop().slideUp();
    }
  );
}

function tab(){
    $("#tab>li").click(function(){
        var idx = $(this).index();
        $("#recent>div").eq(idx).show()  .siblings('div').hide();
        $(this).addClass('selected')  .siblings('li').removeClass('selected');
        // $(this).siblings('li').removeClass('selected');


        
    });
}
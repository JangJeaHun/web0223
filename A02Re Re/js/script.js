$(document).ready(function(){
    $("#gnb>li, #mBack").hover(function(){
        $(".submenu,#mBack").stop().slideToggle();
    },function(){
        $(".submenu,#mBack").stop().slideToggle();
    })

    var idx=0;
    setInterval(function(){
        $("#slide>div").eq(idx).animate({left:"-100%"}).animate({left:"100%"},0)

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>div").eq(idx).animate({left:0})
    },3000)

    $(".pop").click(function(){
        $("#modal").show();
    })
    $(".close").click(function(){
        $("#modal").hide();
    })




    $("#url").change(function(){
        var url = $(this).val();
        window.open(url);
    })
})

$(document).ready(function(){
menu();
var idx=0;
silde();  
popup();



$("#mSlide .item").each(function(index,){
    $(this).animate({left:index*210});
});

let num = 0;
let mini;
const maxIdx= $("#mSlide .item").length-1;
mSlide();

$("#mSlide").hover(function(){
    clearInterval(mini);
},function(){
    mSlide();
});

$(".prev").click(function(){
    if(0<num){
        num--;
    }else{
        num=maxIdx;
    }
    $("#mSlide .item").eq(num).animate({left:-210},0)
    $("#mSlide .item").each(function(){
        $(this).stop(false,true).animate({left:"+=210"})
    });
})

$(".next").click(function(){

    $("#mSlide .item").each(function(){
        $(this).stop(false,true).animate({left:"-=210"})
    });

    $("#mSlide .item").eq(num).animate({left:210*maxIdx},0)

    if(num<maxIdx){
        num++;
    }else{
        num=0;
    }
})


    function mSlide(){
        setInterval(function(){
            $("#mSlide .item").each(function(){
                $(this).animate({left:"-=210"})
            });
        
            $("#mSlide .item").eq(num).animate({left:210*maxIdx},0)
        
            if(num<maxIdx){
                num++;
            }else{
                num=0;
            }
        },3000)
    }















});

function menu(){
    $("#gnb>li").hover(function(){
        $(".submenu",this).stop().slideDown();
    },function(){
        $(".submenu",this).stop().slideUp();
    });
}

function silde(){
    setInterval(function(){
        $("#slide>a").eq(idx).animate({top:"-100%"},400).animate({top:"100%"},0)
        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
        $("#slide>a").eq(idx).animate({top:0})
    },3000)
}

function popup(){
    $(".pop").click(function(){
        $("#popup").show();
    })
    $(".close").click(function(){
        $("#popup").hide();
        
    })

}




$(document).ready(function(){
    
menu();
slide();
tab();
popup();

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(35.15357071627816, 126.88799732174014),
    zoom: 18
});

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.15357071627816, 126.88799732174014),
    map: map
});

var btns = $(".buttons > input");
btns.on("click", function(e) {
    e.preventDefault();

    var mapTypeId = this.id;

    if (map.getMapTypeId() !== naver.maps.MapTypeId[mapTypeId]) {
        map.setMapTypeId(naver.maps.MapTypeId[mapTypeId]); // 지도 유형 변경하기

        btns.removeClass("control-on");
        $(this).addClass("control-on");
    }
});


$("#chkPop").change(function(){
    setCookie("pop","close",3);
})

getCookie();
if(getCookie("pop") =="close"){
    $("#popup").hide();
};



function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; path=/; expires=" + date.toUTCString();
};

function getCookie(name) {

    var cookie = document.cookie;
    if (document.cookie != "") {
         var cookieArray = cookie.split("; ");
         for ( var index in cookieArray) {
             var cookieName = cookieArray[index].split("=");
             if (cookieName[0] == name) {
                  return cookieName[1];
             }
         }
    } return ;    
};

function menu(){
    $("#gnb>li").hover(function(){
        $(".submenu").stop().slideToggle();
    },function(){
        $(".submenu").stop().slideToggle();
    })
};

function slide(){
    var idx=0;
    setInterval(function(){
        $("#slide>a").eq(idx).animate({
            left:"-100%"
        },400)  .animate({
            left:"100%"
        },0);
    
        if(idx<2){
            idx++;
        }else{
            idx=0;
        }
    
        $("#slide>a").eq(idx).animate({
            left:"0"
        },400);
    },3000);
};
function tab(){
    $("#tab>li").click(function(){
        var idx=$(this).index();
        $(this).addClass("selected").siblings("li").removeClass();
        $("#recent>div").eq(idx).show().siblings("div").hide();
    });
};

function popup(){
    $(".pop").click(function(){
        $("#popup").show();
    })
    $(".close").click(function(){
        $("#popup").hide();
    })
};

})
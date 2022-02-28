$(document).ready(function(){

    var idx=0;

    setInterval(function(){
        $("#slide>a").eq(idx).fadeOut(300);

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }

        $("#slide>a").eq(idx).fadeIn(300);

    },3000);



});
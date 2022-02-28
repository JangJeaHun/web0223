$(document).ready(function(){

    var idx=0;

    setInterval(function(){
        $("#silde>a").eq(idx).fadeOut(400);

        if(idx<2){
            idx++;
        }else{
            idx=0;
        }

        $("#silde>a").eq(idx).fadeIn(400);

    },3000);



});
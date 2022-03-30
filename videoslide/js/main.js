$(document).ready(function(){
        
    let idx = 0;
    let vs;
    vSlide();

    function vSlide(){
        vs = setInterval(function(){

            $(".scene").eq(idx).fadeOut(2000);
    
            if(idx<2){
                idx++;
            }else{
                idx=0;
            }
    
            $(".scene").eq(idx).delay(4000).fadeIn(2000);
        },8000);
    }
    



    $("#vSlide").on('wheel',function(e){
        let dir = e.originalEvent.wheelDelta;
        if(dir<0){
            let dist = $(window).height();
            $(document).scrollTop(dist);
        }else{
            $(document).scrollTop(0);
            
        }
    });


    $(".pause").click(function(){
        clearInterval(vs);
        $(this).hide()
        $(".play").show();
    })
    
    $(".play").click(function(){
        vSlide();
        $(this).hide()
        $(".pause").show();
    })

    $(".prev").click(function(){
        clearInterval(vs);
        $(".scene").eq(idx).stop(false,true).fadeOut();
    
        if(idx>0){
            idx--;
        }else{
            idx=2;
        }

        $(".scene").eq(idx).stop(false,true).fadeIn();
        $(".pause").hide()
        $(".play").show();
    })
    
    $(".next").click(function(){
        clearInterval(vs);
        $(".scene").eq(idx).stop(false,true).fadeOut();
    
        if(idx<2){
            idx++;
        }else{
            idx=0;
        }

        $(".scene").eq(idx).stop(false,true).fadeIn();
        $(".pause").hide()
        $(".play").show();
    })

});
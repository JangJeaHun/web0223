$(document).ready(function(){
    const agree = $('input:radio[name=agree]:checked').val();

    $("#agree").change(function(){
        $("#lv2").removeAttr("disabled");
    });
    
    
    $("#disagree").change(function(){
        $("#lv2").attr("disabled",true);
    });

    $("#lv2").click(function(e){
        e.preventDefault();
            $("#step1").hide();
            $("#step2").show();
    });

    $("#id").keyup(function(){
        const id = $(this).val();
        const regExp = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,19}$/g;
        if(regExp.test(id)){
            $("#id_des").text(' ');
        }else{
            $("#id_des").text('형식에 맞지 않습니다.').css({
                color:"red",
                fontWeight:"bold"
            });
        }
    })

    $("#pw").keyup(function(){
        const pw = $(this).val();
        const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$!@*#]).{8,16}$/g;
        if(regExp.test(pw)){
            $("#pw_des").text(' ');
        }else{
            $("#pw_des").text('형식에 맞지 않습니다.').css({
                color:"red",
                fontWeight:"bold"
            });
        }
    });
    
    $("#retype").keyup(function(){
        const retype = $(this).val();
        const pw = $("#pw").val();

        if(retype == pw){
            $("#rt_des").text('패스워드가 일치');
        }else{
            $("#rt_des").text('패스워드가 일치 하지 않습니다.').css({
                color:"red",
                fontWeight:"bold"
            });
        }
    });
    
    $("#email").keyup(function(){
        const email = $(this).val();
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if(regExp.test(email)){
            $("#email_des").text(' ');
        }else{
            $("#email_des").text('형식에 맞지 않습니다.').css({
                color:"red",
                fontWeight:"bold"
            });
        }
    });
    
    
    $("#phone").keyup(function(){
        const phone = $(this).val();
        const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

        if(regExp.test(phone)){
            $("#phone_des").text(' ');
        }else{
            $("#phone_des").text('형식에 맞지 않습니다.').css({
                color:"red",
                fontWeight:"bold"
            });
        }
    });




})
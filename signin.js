
$("#subsignin").click(function( event ){
    event.preventDefault();
    var user_id=$('#user_id').val();
    var user_pw=$('#user_pw').val();
    request = $.ajax({
        url: "http://192.168.0.17:5000/login",
        type: "post",
        data: {
            'user_id': user_id,
            'user_pw': user_pw,
        },
        
        success: function(response){
            console.log(response);
            if (response == 200){
                window.location.href = 'http://192.168.0.35:8080/list.html';
            }else{
                alert('아이디가 없거나 비번이 틀렸습니다.')
            }

        }

    });
    
});
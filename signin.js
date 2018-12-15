
$("#subsignin").click(function( event ){
    event.preventDefault();
    var user_id=$('#user_id').val();
    var user_pw=$('#user_pw').val();
    request = $.ajax({
        url: "http://localhost:5000/login",
        type: "post",
        data: {
            'user_id': user_id,
            'user_pw': user_pw,
        },
        
        success: function(response){
            console.log(response);
        }

    });
    
});
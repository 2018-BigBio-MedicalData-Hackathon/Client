$("#change").click(function(){
    $("#signup1").hide();
    $("#signup2").show();
  });


$("#subsignup").click(function( event ){
    event.preventDefault();
    var user_id=$('#user_id').val();
    var user_pw=$('#user_pw').val();
    var user_pwconfirm=$('#user_pwconfirm').val();
    var username=$('#username').val();
    var user_reginum=$('#user_reginum').val();
    var phonenum=$('#phonenum').val();
    var emailfirst=$('#emailfirst').val();
    var emailsecond=$('#emailsecond').val();
    console.log(phonenum);
    request = $.ajax({
        url: "http://192.168.0.17:5000/signup",
        type: "post",
        data: {
            'user_id': user_id,
            'user_pw': user_pw,
            'user_pwconfirm': user_pwconfirm,
            'username': username,
            'user_reginum': user_reginum,
            'phonenum': phonenum,
            'emailfirst': emailfirst,
            'emailsecond': emailsecond,

        },
        // dataType: "json",
        // contentType: "application/json; charset=utf-8",
        success: function(response){
            console.log(response);
            window.location.href = 'http://192.168.0.35:8080/signin.html';
        }

    });
    
});
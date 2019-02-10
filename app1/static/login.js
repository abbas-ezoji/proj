/////////////////popup login////////////////
const green = "rgb(0, 128, 0)"
const red   = "rgb(255, 0, 0)"
var modal = document.getElementById("myModal");
$("#loginBtn").click(function(){
    if ($(this).css('backgroundColor') == green){
        $(this).css('backgroundColor',red)
        $("#myModal").show();
        $(this).val("  ...عملیات ورود به حساب کاربری");
        $("#registerDiv").hide();
    }
    else{
        $(this).css('backgroundColor',green)
        if (confirm('آیا میخواهید از حسابتان خارج بشوید؟'))
             $("#loginBtn").val('ورود')
    }
})

$("#closeLoginBtn").click(function(){
    $("#myModal").hide();
});
$(window).click(function(e) {
    if (e.target == modal)
        $("#myModal").show();
});
///////////////////////////////////////////
function login(){
    var loginSuccess = false
    var username = $("#usernameTxt").val();
    var password = $("#usernameTxt").val();
    if( username =='' || password ==''){
        $('#usernameTxt').css("border","2px solid red");
        $('#usernameTxt').css("box-shadow","0 0 3px red");
        $('#passwordTxt').css("border","2px solid red");
        $('#passwordTxt').css("box-shadow","0 0 3px red");
        alert("لطفاً نام کاربری و رمز را وارد کنید ...");
    }else{
            var url = "/api/login/?format=json&username='".concat(username).concat("'&password='").concat(password).concat("'")
            console.log(url)
            $.getJSON( url, function( data ) {
                loginSuccess = true
                data.forEach(customer => {
                    $("#loginBtn").val("خوش آمدید ".concat(customer.firstname).concat(' ----- جهت خروج کلیک کنید ...'));
                    $("#userID").val(customer.id)
                    $("#username").val(customer.username)
                    $("#password").val(customer.password)
                    $("#phonenumber").val(customer.phonenumber)
                    $("#firstname").val(customer.firstname)
                    $("#lastname").val(customer.lastname)
                    $("#address").val(customer.address)
                })
                $("#registerDiv").show();
                $("#registerUserDataBtn").click(function(){
                    $("#myModal").hide();
                });
            })
    }
}

function register(){
    $("#registerDiv").fadeIn("slow");
    var newUser ={username:     $("#username").val,
                  password:     $("#password").val,
                  phonenumber:  $("#phonenumber").val,
                  firstname:    $("#firstname").val,
                  lastname:     $("#lastname").val,
                  address:      $("#address").val
                 }
    $("#registerUserDataBtn").click(function(){
        $.ajax({
                type: "POST",
                url: "/api/login/",
                csrfmiddlewaretoken: "{{ csrf_token }}",
                data: newUser,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data){
                    alert(data);
                },
                failure: function(errMsg) {
                    alert(errMsg);
                }
              })
    })

}

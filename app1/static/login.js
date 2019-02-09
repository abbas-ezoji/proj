/////////////////popup login////////////////
var modal = document.getElementById("myModal");
$("#loginBtn").click(function(){
    $(this).val("  ...عملیات ورود به حساب کاربری");
    console.log('click')
    $("#registerDiv").hide();
    $("#myModal").show();
});
$("#closeLoginBtn").click(function(){
    $("#myModal").hide();
});
$(window).click(function(e) {
    if (e.target == modal)
        $("#myModal").show();
});
///////////////////////////////////////////
function login(){
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
                data.forEach(customer => {
                    $("#loginBtn").val("خوش آمدید ".concat(customer.firstname));
                })
                $("#myModal").hide();
            })

    }

}

function register(){
    $("#registerDiv").fadeIn("slow");
}

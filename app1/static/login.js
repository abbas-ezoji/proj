/////////////////popup login////////////////
var modal = document.getElementById("myModal");
$("#loginBtn").click(function(){
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
    console.log('login')
    var username = $("#usernameTxt").val();
    var password = $("#password").val();
    if( username =='' || password ==''){
        $('#usernameTxt').css("border","2px solid red");
        $('#usernameTxt').css("box-shadow","0 0 3px red");
        $('#passwordTxt').css("border","2px solid red");
        $('#passwordTxt').css("box-shadow","0 0 3px red");
        alert("لطفاً نام کاربری و رمز را وارد کنید ...");
    }
}

function register(){
    $("#registerDiv").fadeIn("slow");
}

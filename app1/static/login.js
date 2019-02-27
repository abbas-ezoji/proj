/////////////////popup login////////////////
const green = "rgb(0, 128, 0)"
const red   = "rgb(255, 0, 0)"
////////////////////////////////////////////
if(localStorage.getItem('token')!==null){
    token = localStorage.getItem('token')
    name = localStorage.getItem('name')
    logged(token,name)
}

function setLogin(){
    $("#myModal").show();
    $(this).val("  ...عملیات ورود به حساب کاربری");
    $("#registerDiv").hide();
}
function setLogout(){
    $(this).css('backgroundColor',green)
    if (confirm('آیا میخواهید از حسابتان خارج بشوید؟')){
        $("#loginBtn").val('ورود')
        $("#loginBtn").css('backgroundColor',green)
        localStorage.clear();
    }
}
function logged(token,name){
    loginSuccess = true
    $("#loginBtn").val("خوش آمدید ".concat(name))
    if(localStorage.getItem('token')===null){
        localStorage.setItem('token', token);
        localStorage.setItem('name', name);
    }

    alert("خوش آمدید ".concat(name))
    console.log(localStorage.getItem("token"))
    $("#myModal").hide();
    $("#loginBtn").css('backgroundColor',red)
}

///////////////////////////////////////////
var modal = document.getElementById("myModal");
$("#loginBtn").click(function(){
    if ($(this).css('backgroundColor') == green) setLogin()
    else setLogout()
})
$("#loginSubmit").click(login())
$("#singnupShow").click(register())
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
    var username = ($("#usernameTxt").val())
    var password = ($("#usernameTxt").val())
    if( username =='' || password ==''){
        $('#usernameTxt').css("border","2px solid red");
        $('#usernameTxt').css("box-shadow","0 0 3px red");
        $('#passwordTxt').css("border","2px solid red");
        $('#passwordTxt').css("box-shadow","0 0 3px red");
        return;
    }else{
            var url = '/api/users/userdetails/'
            var credentials = JSON.stringify({"username":username,"password":password})
            var token
            var user
            console.log(url)
            console.log(credentials)
            $.ajax({
               type: "POST",
               url: url,
               data: credentials,
               contentType: "application/json",
               statusCode: {
               401: function() {
                    alert( 'نام کاربری یا رمز صحیح نیست' );
                    }
               },
               success: function(data, textStatus, xhr){
                        logged(data.token,data.name)
               },
               failure: function(errMsg) {
                   alert(errMsg);
               }
             })
    }
}

function register(){
    $("#registerDiv").fadeIn("slow")
}

$("#registerUserDataBtn").click(function(){
    var username=$("#username").val()
    var first_name=$("#firstname").val()
    var last_name=$("#lastname").val()
    var email=$("#email").val()
    var password=$("#password").val()
    if( username =='' || password ==''){
       $('#username').css("border","2px solid red")
       $('#username').css("box-shadow","0 0 3px red")
       $('#password').css("border","2px solid red")
       $('#password').css("box-shadow","0 0 3px red")
       return;
    }else{
          var newUser =JSON.stringify({"username":username,
                                       "first_name":first_name,
                                       "last_name":last_name,
                                       "email":email,
                                       "password":password
                                       })
          console.log(newUser)
          $.ajax({
                   type: "POST",
                   url: "/api/users/create/",
                   data: newUser,
                   contentType: "application/json",
                   success: function(data){
                       alert("کاربر با موفقیت ثبت شد")
                   },
                   failure: function(errMsg) {
                       alert(errMsg);
                   }
                 })
     }
})



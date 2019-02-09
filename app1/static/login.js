/////////////////popup login////////////////
var modal = document.getElementById("myModal");
$("#loginBtn").click(function(){
    $("#registerDiv").hide();
    $("#myModal").show();
});
$("#loginCloseBtn").click(function(){
    $("#myModal").hide();
});
$(window).click(function(e) {
    if (e.target == modal)
        $("#myModal").show();
});
///////////////////////////////////////////
function login(){

}

function register(){
    $("#registerDiv").fadeIn("slow");
}

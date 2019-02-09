/////////////////popup login////////////////

                var modal = document.getElementById('myModal');

                // Get the button that opens the modal
                var btn = document.getElementById("loginBtn");

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                // When the user clicks the button, open the modal
                btn.onclick = function() {
                  modal.style.display = "block";
                }

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                  modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                }

///////////////////////////////////////////
function login(){

}

function register(){
<<<<<<< HEAD

=======
    $("#regiterDiv").fadeIn("slow");
//    var regiterDiv = document.getElementById('regiterDiv');
//    regiterDiv.style.display = "block";
>>>>>>> 7a3b53a37cbc2d55da85337f5032cd0ef5638509
}
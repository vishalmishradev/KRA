document.getElementById("form").addEventListener("submit", function(event){

  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  document.getElementById("result").innerHTML =
    "Name: " + name + "<br>Email: " + email;

});
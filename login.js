

function loginform(){
let username = document.getElementById("username").value;
let password = document.getElementById("pass").value;

if ( username == "patz" && password == "patz123")
{
window.location = "patient-form.html"
alert ("Login successfully");

}
else
{
    alert("Wrong username or password");
}
}
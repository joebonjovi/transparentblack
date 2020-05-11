function valuecheck() {
if(document.getElementById('pass').value != "000thankyou") {
document.getElementById('passalert').innerHTML = "*missing or invalid password";
document.getElementById('passalert').style.color = "red";
document.getElementById('pass').style.borderColor = "red";
return false;
}

if(document.getElementById('pass').value == "000thankyou") {
alert("You have successfullly logged in.");
}
}
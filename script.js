function validateForm()
{

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;

if(name=="")
{
alert("Please enter your name");
return false;
}

if(email=="")
{
alert("Please enter email");
return false;
}

alert("Enquiry Submitted Successfully");

return true;

}

function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    window.location.href="Book.html";
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}


}
let username = document.getElementById("username");
let error= document.getElementById("error");
let password=document.getElementById("password");
function formvalidate(){
if(username.value=="admin"&& password.value=="12345"){
    error.innerHTML="valid login";
    error.style.color="green";
    return true;

}
else{
    error.innerHTML="invalid login";
    error.style.color="red";
    return false;
}
}
// function formvalidate() {
//     username = document.getElementById("username");
//     password = document.getElementById("password");
//     return usernameCheck(username, password, validLogin, triggerError);
// }

// function usernameCheck(username, password, validLogin, triggerError) {
//     if (username.value == "admin" && password.value == "12345") {
//         return validLogin();
//     }
//     else {
//         return triggerError();
//     }
// }

// function validLogin() {
//     return true;
// }
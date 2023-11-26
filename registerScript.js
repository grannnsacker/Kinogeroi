function clearForm(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
       
}

function enterance(){
    if (document.getElementById("username").value != "" && document.getElementById("password").value != "" && document.getElementById("email").value != ""){ 
        clearForm();
        
        window.location.href = "index.html";
    }
}

function register(){
    clearForm();
}
document.getElementById("loginForm").onsubmit = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    var storedUser = localStorage.getItem('user');
    if (storedUser) {
        var user = JSON.parse(storedUser);
        if (user.username === username && user.password === password) {
            
            window.location.href = "index.html";
        } else {
            
            alert("The username or password is incorrect.");
        }
    } else {

        alert("You don't have an account yet. Please register first.");
    }
    return false;
};
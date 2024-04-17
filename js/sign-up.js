$("#password").blur(function (e) { 
    e.preventDefault();
    var string = $("#password").val();
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    var result = pattern.test(string);
    if (result == false) {
        $("#ppassword").html("The password must be at least 8 characters long, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character");
        $("#ppassword").css("color", "red"); 
    } else {
        $("#ppassword").html("");
    }
});

$("#email").blur(function (e) { 
    e.preventDefault();
    var string = $("#email").val();
    var pattern = /^\w+@gmail.com$/;
    var result = pattern.test(string);
    if (result == false) {
        $("#pemail").html("The email must be in the format example@gmail.com");
        $("#pemail").css("color", "red"); 
    } else {
        $("#pemail").html("");
    }
});

$("#confirmPassword").blur(function () {
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();

    if (password !== confirmPassword) {
        $("#errConfirmPassword").text("Wrong Password").css("color", "red");
    } else {
        $("#errConfirmPassword").text("").removeAttr("style");
    }
});

document.getElementById("registerForm").onsubmit = function() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var isValid = true;

    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert(".Please fill in all registration information");
        isValid = false;
    }

    if (password != confirmPassword) {
        $("#errConfirmPassword").text("The confirmed password does not match.").css("color", "red");
        isValid = false;
    }

    var emailPattern = /^\w+@gmail.com$/;
    if (!emailPattern.test(email)) {
        $("#pemail").html("The email must be in the format example@gmail.com").css("color", "red"); 
        isValid = false;
    }

    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
        $("#ppassword").html("The password must be at least 8 characters long, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.").css("color", "red");
        isValid = false;
    }

    if (isValid) {
        var user = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "sign-in.html";
    }

    return false;
};
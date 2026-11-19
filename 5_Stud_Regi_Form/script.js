
document.getElementById("myForm").onsubmit = function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let message = document.getElementById("message");

    if (username == "" || email == "" || password == "" ||
        confirm == "" || age == "" || mobile == "" || gender == null) {

        message.innerHTML = "Please fill all fields";
        message.style.color = "red";

    } 
    else if (!email.includes("@") || !email.includes(".")) {

        message.innerHTML = "Enter valid email";
        message.style.color = "red";

    }
    else if (password.length < 8) {

        message.innerHTML = "Password must have 8 characters";
        message.style.color = "red";

    }
    else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {

        message.innerHTML = "Password must contain one capital letter and one number";
        message.style.color = "red";

    }
    else if (password != confirm) {

        message.innerHTML = "Passwords do not match";
        message.style.color = "red";

    }
    else if (age < 18 || age > 100) {

        message.innerHTML = "Enter valid age";
        message.style.color = "red";

    }
    else if (!/^[0-9]{10}$/.test(mobile)) {

        message.innerHTML = "Enter valid 10 digit mobile number";
        message.style.color = "red";

    }
    else {

        message.innerHTML = "Registration Successful!";
        message.style.color = "green";

    }

};

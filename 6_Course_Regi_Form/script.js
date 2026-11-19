
document.getElementById("myForm").onsubmit = function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    let message = document.getElementById("message");

    if (name == "" || email == "" || mobile == "" ||
        password == "" || age == "" || course == "") {

        message.innerHTML = "Please fill all fields";

    }
    else if (!email.includes("@") || !email.includes(".")) {

        message.innerHTML = "Enter valid email";

    }
    else if (!/^[0-9]{10}$/.test(mobile)) {

        message.innerHTML = "Enter valid 10 digit mobile number";

    }
    else if (password.length < 8 || !/[A-Z]/.test(password) ||
             !/[0-9]/.test(password)) {

        message.innerHTML = "Password needs 8 characters, one capital letter and one number";

    }
    else if (age < 18 || age > 100) {

        message.innerHTML = "Age must be between 18 and 100";

    }
    else {

        message.innerHTML = "Course Registration Successful!";

    }

};

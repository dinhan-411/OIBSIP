function isStrongPassword(password) {
    const minLength = 8;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (password.length < minLength) {
        return false;
    }

    if (!uppercaseRegex.test(password) ||
        !lowercaseRegex.test(password) ||
        !numberRegex.test(password) ||
        !specialCharRegex.test(password)) {
        return false;
    }

    return true;
}

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Please enter the details";
    } else {
        if (!isStrongPassword(password)) {
            errorMessage.textContent = "Password is not valid";
        } else {
            if (username === "John" && password === "Welcome$123") {
                errorMessage.textContent = "";
                alert("Login success!");
                window.location.href=("Success.html");
            } else {
                errorMessage.textContent = "Invalid username or password";
            }
        }
    }
}

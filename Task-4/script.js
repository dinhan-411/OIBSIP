function isStrongPassword(password) {
    // Minimum length of 8 characters
    const minLength = 8;

    // Regular expressions for complexity requirements
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    // Check minimum length
    if (password.length < minLength) {
        return false;
    }

    // Check for complexity
    if (!uppercaseRegex.test(password) ||
        !lowercaseRegex.test(password) ||
        !numberRegex.test(password) ||
        !specialCharRegex.test(password)) {
        return false;
    }

    // All criteria met
    return true;
}

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    // Get user inputs
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate inputs
    if (username.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Please enter the details";
    } else {
        // Check if the password meets the criteria
        if (!isStrongPassword(password)) {
            errorMessage.textContent = "Password is not valid";
        } else {
            // For simplicity, you can do a basic check here
            if (username === "John" && password === "Welcome$123") {
                // Successful login
                errorMessage.textContent = "";
                alert("Login success!");
                window.location.href=("Success.html");
            } else {
                // Invalid credentials
                errorMessage.textContent = "Invalid username or password";
            }
        }
    }
}

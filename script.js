// Function to validate the login form
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;


    let valid = true;

    // Validate username
    if (!username) {
        document.getElementById("usernameError").textContent = "Username is required.";
        valid = false;
    }

    // Validate password
    if (!password) {
        document.getElementById("passwordError").textContent = "Password is required.";
        valid = false;
    }
    if (!yearType) {
        document.getElementById("yearTpeError").textContent = "Please select a year.";
        valid = false;
    }
    if (!semType) {
        document.getElementById("semTpeError").textContent = "Please select a sem type.";
        valid = false;
    }

    if (!userType) {
        document.getElementById("userTpeError").textContent = "Please select a user type.";
        valid = false;
    }


    // If both fields are valid, show the welcome page
    if (valid) {
        window.location.href = "welcome.html";  // Redirect to the welcome page
    }
});

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let btnSignup = document.getElementById("btn-signup");
let btnLogin = document.getElementById("btn-login");

btnSignup.addEventListener("click", function () {
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (email === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup successful! Data saved in Local Storage.");
    emailInput.value = "";
    passwordInput.value = "";
});

btnLogin.addEventListener("click", function () {
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful! Welcome back " + email);
    } else {
        alert("Invalid email or password!");
    }
});

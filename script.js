// login
function loginUser(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

     
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        
        
        sessionStorage.setItem("loggedIn", "true");

        
        window.location.href = "logout.html";
    } else {
        alert("Invalid username or password.");
    }
}

// logout
function logoutUser() {
    
    sessionStorage.removeItem("loggedIn");

    alert("You have been logged out!");

   
    window.location.href = "login.html";
}


if (window.location.pathname.includes("logout.html")) {
    if (!sessionStorage.getItem("loggedIn")) {
        alert("You are not logged in!");
        window.location.href = "login.html";
    }
}

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.log("Error loading page: ", error));
}

// Load login page by default when the site opens
window.onload = function() {
    loadPage('login.html');
};


document.getElementById("Login").style.display = "block";


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;
    var signupUsername = document.getElementById("signupUsername").value;
    var signupPassword = document.getElementById("signupPassword").value;

   
    if (loginUsername === signupUsername && loginPassword === signupPassword) {
        alert("Login successful");
        window.location.href = "payslip.html";
    } else {
        alert("Invalid username or password");
    }
});


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup successful");
});




function backToMainPage() {
    window.location.href="index.html";
}
function submitAcc() {
    // Admin accounts 
    let adminAccs = [
        {
            name: "admin",
            pass: "admin123",
        },
        {
            name: "admin2",
            pass: "admin1234",
        }]
    // get the value entered in the input fields
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;

    // check the log-in info
    for (let i = 0; i < adminAccs.length; i++) {
        if (name = adminAccs[i].name && pass == adminAccs[i].pass)
            window.location.href = "index.html";
    }

    // error message
    document.getElementById("error").innerHTML = "Името или паролата Ви не е вярна!";
}

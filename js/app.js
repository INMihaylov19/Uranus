function submitAcc() {
    let adminAccs = [
        {
            name: "admin",
            pass: "admin123",
        },
        {
            name: "admin2",
            pass: "admin1234",
        }]
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    
    for(let i = 0; i < adminAccs.length; i++){
        if (name = adminAccs[i].name && pass == adminAccs[i].pass)
            window.location.href = "index.html";
    }

    document.getElementById("error").innerHTML = "Името или паролата Ви не е вярна!";
}

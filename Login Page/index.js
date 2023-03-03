//Author: Hansel Omondi


let user1 = {
    username: "Hansel Omondi",
    password: 123456
}

function user_authentification() {
    let userEl = document.getElementById("user-name").value
    let passEl = document.getElementById("pass").value
    let msg = document.getElementById("authentification-msg")
    if (userEl == "" || passEl == "") {
        msg.textContent = "Please enter your credentials."
    } else if (userEl == user1.username && passEl == user1.password) {
        msg.textContent = "You have successfully logged in!"
    } else {
        msg.textContent = "The credentials you have entered do not exist."
    }
}
// start shopping
// Get the modal
var modal = document.getElementById('id01');

//start shopping
let strtBtn = document.getElementById("strtBtn")
strtBtn.addEventListener("click", strtBtn_click)
function strtBtn_click() {
    strtBtn.style.opacity = "0%"
}


// check name
let userName = document.getElementById("userName")
userName.addEventListener("blur", f_userNameBlur)

function f_keypress() {
    if (event.keyCode >= 48 && event.keyCode <= 57)
        event.preventDefault()
}

function f_userNameBlur() {
    let user = JSON.parse(localStorage.getItem(userName.value))
    if (localStorage.getItem(userName.value) != null) {
        password.value = JSON.parse(localStorage.getItem(userName.value)).password
        backgroundColor.value = JSON.parse(localStorage.getItem(userName.value)).backgroundColor
        fontFamily.value = JSON.parse(localStorage.getItem(userName.value)).fontFamily
        fontColor.value = JSON.parse(localStorage.getItem(userName.value)).fontColor
        sessionStorage.setItem("bgcolor", JSON.parse(localStorage.getItem(userName.value)).backgroundColor)
        sessionStorage.setItem("ffamily", JSON.parse(localStorage.getItem(userName.value)).fontFamily)
        sessionStorage.setItem("fcolor", JSON.parse(localStorage.getItem(userName.value)).fontColor)
    }
}

//check password
let password = document.getElementById("password")
password.addEventListener("blur", f_passwordBlur)

function f_passwordBlur() {

    if (password.value.length < 5)
        password.focus()

}

let submit = document.getElementById("submit")
submit.addEventListener("click", f_submit)


let backgroundColor = document.getElementById("backgroundColor")
let fontColor = document.getElementById("fontColor")
let fontFamily = document.getElementById("fontFamily")


function f_submit() {
    if (userName.value == "" || password.value == "");
    else if (localStorage.getItem(userName.value) != null &&
        (JSON.parse(localStorage.getItem(userName.value)).password != password.value)) {
        alert("not valid")
        userName.value = ""
    }

    else if (password.value.length > 5 && userName.value.length > 0) {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            let user = {
                "userName": userName.value, "password": password.value, "backgroundColor": "white",
                "fontColor": "black", "fontFamily": "Yaahowu Light"
            };
            let str = JSON.stringify(user)
            localStorage.setItem(user.userName, str)
            sessionStorage.setItem("fcolor", "black")
            sessionStorage.setItem("bgcolor", "white")
            sessionStorage.setItem("ffamily", "Yaahowu Light")
        }
        else {
            let user = {
                "userName": userName.value, "password": password.value, "backgroundColor": backgroundColor.value,
                "fontColor": fontColor.value, "fontFamily": fontFamily.value
            };
            let str = JSON.stringify(user)
            localStorage.setItem(user.userName, str)
            sessionStorage.setItem("user", str)
            sessionStorage.setItem("fcolor", fontColor.value)
            sessionStorage.setItem("bgcolor", backgroundColor.value)
            sessionStorage.setItem("ffamily", fontFamily.value)

        }
        userName.value = ""
        password.value = ""
        backgroundColor.value = ""
        fontColor.value = ""
        fontFamily.value = ""
        window.location = "links.html"

    }

}


function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "none"
    }
    else {
        text.style.display = "block";
    }
}
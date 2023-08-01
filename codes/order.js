let credNum = document.getElementById("credNum")
credNum.addEventListener("keypress", f_keyPressDigit)
let phonenum = document.getElementById("phonenum")
phonenum.addEventListener("keypress", f_keyPressDigit)
let num3 = document.getElementById("num3")
num3.addEventListener("keypress", f_keyPressDigit)

let r = document.getElementById("name")
r.addEventListener("keypress", f_letters)

function f_keyPressDigit() {
    if (!(event.keyCode >= 48 && event.keyCode <= 57))//האם זה אותיות
        event.preventDefault()

}

function f_letters() {
    if (event.keyCode >= 48 && event.keyCode <= 57)
        event.preventDefault()
}

// when pressed on submit
let btn = document.getElementsByClassName("btn")
btn.addEventListener("click", u)
function u() {
    window.location = "finish.html"
}
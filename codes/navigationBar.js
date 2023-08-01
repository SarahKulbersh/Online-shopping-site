//color background
let body1 = document.getElementsByTagName("body")[0]

let backgroundColor = document.getElementById("backgroundColor")

backgroundColor.addEventListener("blur", f_backgroundColorBlur)
let c1 = "white"
function f_backgroundColorBlur() {
    c1 = backgroundColor.value
    body1.style.backgroundColor = c1
    sessionStorage.setItem("backgroundColor", c1)
}

// color text
let fontColor = document.getElementById("fontColor")
fontColor.addEventListener("blur", f_fontColorBlur)
function f_fontColorBlur() {
    c2 = fontColor.value
    body1.style.color = c2
    sessionStorage.setItem("textColor", c2)
}

// choose font family
let fontFamily = document.getElementById("fontFamily")
fontFamily.addEventListener("blur", f_keypress)
function f_keypress() {
    c3 = fontFamily.value
    body1.style.fontFamily = c3
    sessionStorage.setItem("fontFamily", c3)
}
let info = document.getElementById("info")
let picDiv=document.getElementById("pic")
let heading = document.getElementById("text")

// item name
let lName=document.createElement("label")
lName.style.fontFamily="Yaahowu Light"
lName.style.paddingTop="-100px"
let itemView = JSON.parse(sessionStorage.getItem("itemView"))
text.appendChild(lName)
lName.innerHTML=itemView.itemName

// item image
let pic= document.createElement("img")
pic.setAttribute("src",itemView.picLink)
picDiv.appendChild(pic)
pic.style.height="450px"
pic.style.borderColor="#4d194d"
pic.style.margin="1%"
picDiv.style.width="460px"
pic.style.borderStyle="solid"

// item price
let price=document.getElementById("price")
let lPrice=document.createElement("label")
lPrice.style.fontFamily="Yaahowu Light"
price.appendChild(lPrice)
lPrice.innerHTML="Price: "+itemView.price+"$"


// item color
let colord=document.getElementById("color")
let color=document.createElement("label")
color.style.fontFamily="Yaahowu Light"
color.style.marginLeft="60%"
colord.appendChild(color)
color.innerHTML="color: "+itemView.color


let add=document.getElementById("add")
add.addEventListener("click",f_add)

function f_add() {
    add.innerHTML="add to bag ☑"
   let JView= JSON.stringify(itemView)
    sessionStorage.setItem(itemView.id, JView)
}

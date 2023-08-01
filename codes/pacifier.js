let ID = 1000;
function item(itemName, size, price, color, picLink, catogory) {
    this.id = ID++;
    this.itemName = itemName;
    this.size = size;
    this.price = price;
    this.color = color;
    this.picLink = picLink;
    this.catogory = catogory;

}

let i1 = new item("pacifier string ", "6-9 mon", 50, "colorful", "../pics/pacifier wooden clip.jpg");
let i2 = new item("Dots pacifier string", "6-9 mon", 50, "colorful", "../pics/passi holder cat.jpg");
let i3 = new item("gray pacifier string", "6-9 mon", 50, "colorful", "../pics/bunny passi holder.jpg");
let i4 = new item("blue pacifier string", "6-9 mon", 50, "colorful", "../pics/teddi passi holder.jpg");
let i5 = new item("pacifier bib", "6-9 mon", 50, "colorful", "../pics/bib passi holder.jpg");
let i6 = new item("beeds pacifier string", "6-9 mon", 50, "colorful", "../pics/Crystal-Baby-Pacifier-chain.jpg");
let i7 = new item("hearts pacifier string", "6-9 mon", 50, "colorful", "../pics/Pink-Paci-Clip_Hero.jpg");
let i8 = new item("colorful beeds pacifier string", "6-9 mon", 50, "colorful", "../pics/rainbow-silicone-pacifier-clip.jpg");
let i9 = new item("beeded pacifier string", "6-9 mon", 50, "colorful", "../pics/green-silicone-and-wood-pacifier-clip.jpg");

let arr = [i1, i2, i3, i4, i5, i6, i7, i8, i9];
let itemDiv = document.getElementById("itemDiv")
itemDiv.setAttribute("id", "itemDiv")
itemDiv.style.paddingLeft = "7%"

let i;
for (i = 0; i < arr.length; i++) {
    let card = document.createElement("section")
    card.setAttribute("class", "card")
    card.style.backgroundColor = " #d9d9d9    "
    card.setAttribute("id", arr[i].id)
    card.style.margin = "1%"
    itemDiv.appendChild(card)
    card.addEventListener("click", btnViewClick)

    // picture of very item
    let Item = document.createElement("img")
    Item.setAttribute("src", arr[i].picLink)
    Item.setAttribute("id", "item" + i)
    card.appendChild(Item)
    Item.style.height = "60%"
    Item.style.width = "auto";

    Item.style.marginTop = "20px"
    Item.style.border = "groove"
    Item.style.borderWidth = "3px"
    Item.style.borderColor = "#4d194d"
    Item.setAttribute("id", arr[i].id)
    Item.addEventListener("click", btnViewClick)

    // item name
    let itemNameLable = document.createElement("label")
    itemNameLable.innerHTML = arr[i].itemName
    itemDiv.style.margin = "5%"
    itemNameLable.style.fontFamily = "Yaahowu Light"
    card.appendChild(itemNameLable)

    // view button
    let viewbtn = document.createElement("input")
    viewbtn.setAttribute("type", "button")
    viewbtn.setAttribute("value", "more details")
    viewbtn.setAttribute("class", "button")
    viewbtn.style.backgroundColor = null
    viewbtn.style.fontFamily = "Yaahowu Light"
    viewbtn.style.fontSize = "medium"
    viewbtn.setAttribute("id", arr[i].id)

    card.appendChild(viewbtn)
    viewbtn.addEventListener("click", btnViewClick)
}

function btnViewClick() {
    let a = arr.find(x => x.id == event.target.id)
    let JView = JSON.stringify(a)
    sessionStorage.setItem("itemView", JView)
    window.location = "view.html"
}

function addToCartClick() {

}
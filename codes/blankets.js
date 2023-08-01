let ID = 0;
function item(itemName, size, price, color, picLink, catogory) {
    this.id = ID++;
    this.itemName = itemName;
    this.size = size;
    this.price = price;
    this.color = color;
    this.picLink = picLink;
    this.catogory = catogory;

}


let i1 = new item("velour gray", "6-9 mon", 50, "colorful", "../pics/light gray blanket.jpg");
let i2 = new item("summery white light blanket", "6-9 mon", 50, "colorful", "../pics/burp clot.JPG");
let i3 = new item("white beige blanket", "6-9 mon", 50, "colorful", "../pics/summery blanket.JPG");
let i4 = new item("white & yellow blanket", "6-9 mon", 50, "colorful", "../pics/teddy desighned blanket.JPG");
let i5 = new item("furry pink blanket", "6-9 mon", 50, "colorful", "../pics/pink and white blanket.jpg");
let i6 = new item("furry pink & red blanket", "6-9 mon", 110, "colorful", "../pics/marroon blanket.jpg");
let i7 = new item("blue & gray blanket", "6-9 mon", 50, "colorful", "../pics/blue gray blanket.jpg");
let i8 = new item("gray & navy blanket", "6-9 mon", 50, "colorful", "../pics/blue and gray blanket.jpg");
let i9 = new item("blanket with hearts", "6-9 mon", 50, "colorful", "../pics/heart blanket.jpg");
let i10 = new item("2 light blankets", "6-9 mon", 50, "colorful", "../pics//light blankets.jpg");
let i11 = new item("furry blanket with teddy", "6-9 mon", 110, "colorful", "../pics/maroon blanket.jpg");
let i12 = new item("pink furry blanket", "6-9 mon", 50, "colorful", "../pics/pink furry blanket.jpg");
let i13 = new item("striped blanket", "all", 50, "colorful", "../pics/striped blanket.jpg");
let i14 = new item("teddy blanket", "all", 50, "colorful", "../pics/bear-toddler-lovey-c.jpg");
let i15 = new item("teddy blanket", "all", 50, "colorful", "../pics/brown bunny and blanket.jpg");
let i16 = new item("elephant blanket", "all", 50, "colorful", "../pics/elephant and blanket.jpg");
let i17 = new item("ryno blanket", "all", 50, "colorful", "../pics/hippo and blanket.jpg");
let i18 = new item("turquise blanket", "all", 50, "colorful", "../pics/gray turquise blanket.jpg");
let i19 = new item("turquise blanket", "all", 50, "colorful", "../pics/light blankets.jpg");
let i20 = new item("stars blanket", "all", 50, "colorful", "../pics/star desighned blanket.JPG");
let i21 = new item("gray knit blanket", "all", 120, "colorful", "../pics/XL-7207108-A.jpg");
let i22 = new item("cozy blanket", "all", 120, "colorful", "../pics/XL-7217091-A.jpg");

let arr = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22];
let itemDiv = document.getElementById("itemDiv")
itemDiv.setAttribute("id", "itemDiv")
itemDiv.style.paddingLeft = "7%"

let i;
for (i = 0; i < arr.length; i++) {
    let card = document.createElement("section")
    card.setAttribute("class", "card")
    card.style.backgroundColor = "lightgrey"
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
    viewbtn.setAttribute("id", arr[i].id)
    viewbtn.style.backgroundColor = null
    viewbtn.style.fontFamily = "Yaahowu Light"
    viewbtn.style.fontSize = "medium"
    card.appendChild(viewbtn)
    viewbtn.addEventListener("click", btnViewClick)
}

function btnViewClick() {
    let a = arr.find(x => x.id == event.target.id)
    let JView = JSON.stringify(a)
    sessionStorage.setItem("itemView", JView)
    window.location = "view.html"
}


let body1 = document.getElementsByTagName("body")[0]
let font = sessionStorage.getItem("fontFamily")
body1.style.fontFamily=font

let mySec=document.getElementById("sec")
let tbl,tr, th, td
tbl=document.createElement("table")
tbl.setAttribute("border",1);
tr=document.createElement("tr")
let sum=0

// making headings for the table
th=document.createElement("th")
th.innerHTML="Id"
tr.appendChild(th)
tbl.appendChild(tr)


th=document.createElement("th")
th.innerHTML="Name"
tr.appendChild(th)
tbl.appendChild(tr)

th=document.createElement("th")
th.innerHTML="Price"
tr.appendChild(th)
tbl.appendChild(tr)

th=document.createElement("th")
th.innerHTML="Image"
tr.appendChild(th)
tbl.appendChild(tr)

th=document.createElement("th")
th.setAttribute("id","th")
th.innerHTML="Remove"
tr.appendChild(th)
tbl.appendChild(tr)


for(let i=0; i<1100; i++)
{
    if (JSON.parse(sessionStorage.getItem(i))!=null){
        tr=document.createElement("tr")
        td=document.createElement("td")
        td.innerHTML=JSON.parse(sessionStorage.getItem(i)).id
        tr.appendChild(td)

        td=document.createElement("td")
        td.innerHTML=JSON.parse(sessionStorage.getItem(i)).itemName
        tr.appendChild(td)

        td=document.createElement("td")
        td.innerHTML=JSON.parse(sessionStorage.getItem(i)).price
        tr.appendChild(td)
        sum+=JSON.parse(sessionStorage.getItem(i)).price

        td=document.createElement("td")
        let p= document.createElement("img")
        p.setAttribute("src",JSON.parse(sessionStorage.getItem(i)).picLink)
        p.style.width="80px"
        td.appendChild(p)
        tr.appendChild(td)
    


        td=document.createElement("td")
        let btn=document.createElement("input")
        btn.setAttribute("type","button")
        btn.setAttribute("value","remove")
        btn.setAttribute("data-i",JSON.parse(sessionStorage.getItem(i)).id)
        btn.style.fontFamily="Yaahowu Light"
        btn.style.fontSize="large"
        btn.style.border="none"
        btn.style.height="50px"
        btn.style.backgroundColor="null"
        btn.addEventListener("click",f_click)
        td.appendChild(btn)
        tr.appendChild(td)
    

        td.appendChild(btn)
        tr.appendChild(td)
        tbl.appendChild(tr)

}
}

let sumSec=document.getElementById("sum")
let sum1=document.createElement("label")
sum1.innerHTML="Total: "+sum+"$"
sum1.setAttribute("id","total")
sumSec.appendChild(sum1)
sumSec.appendChild(document.createElement("br"))
sumSec.appendChild(document.createElement("br"))
sumSec.appendChild(document.createElement("br"))
sessionStorage.setItem("sum",sum)


mySec.appendChild(tbl)
tbl.style.margin="2%"
tbl.style.backgroundColor=" #cccccc"

let done = document.createElement("input")
done.setAttribute("type","button")
done.setAttribute("value","Check out")
done.setAttribute("id", "bt")
done.style.fontFamily="Yaahowu Light"
done.style.fontSize="large"
sumSec.appendChild(done)
done.addEventListener("click",payment)

function payment(){
    if (sum>0)
    window.location="order.html"
    else
    alert("Your cart is empty")
}



function f_click()
{
    sessionStorage.setItem(event.target.getAttribute("data-i"), null);
    window.location="chart.html"
}


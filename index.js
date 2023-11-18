// const express = require('express')
// const app = express()
// const port = 8080

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
function clickPay(){
    alert("Đơn hàng đã được thanh toán thành công");
    
}
// function showTime(){
//   var date = new Date();
//   var h = date.getHours(); // 0 - 23
//   var m = date.getMinutes(); // 0 - 59
//   var s = date.getSeconds(); // 0 - 59
//   var session = "AM";
  
//   if(h == 0){
//       h = 12;
//   }
  
//   if(h > 12){
//       h = h - 12;
//       session = "PM";
//   }
  
//   h = (h < 10) ? "0" + h : h;
//   m = (m < 10) ? "0" + m : m;
//   s = (s < 10) ? "0" + s : s;
  
//   var time = h + ":" + m + ":" + s + " " + session;
//   document.getElementById("MyClockDisplay").innerText = time;
//   document.getElementById("MyClockDisplay").textContent = time;
  
//   setTimeout(showTime, 1000);
  
// }

// showTime();
function timeReve(){
    var d = new Date();
    var target = new Date(2023, 11, 20, 15,46, 0,0);
    var diff = target - d;
    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;
    var session = "";

    if (h ==0 && m ==0 && s == 0){
        var session = "Time out"
    }
    h =(h < 10) ? "0" + h :h;
    m = (m < 10) ? "0" + m :m;
    s = (s < 10) ? "0" + s :s;
    var time =  h + ":" + m + ":" + s +session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(timeReve,1000);
    
};
timeReve();
// dao nguoc chu
// function roundName(id) {
//     var element = document.getElementById(id);
//     var textNode = element.childNodes[0];
//     var text = textNode.data;
// setInterval(function() {
//     text = text[text.length -1] + text.substring(0,text.length -1);
//     textNode.data = text;
// },1000)
// }
// function getInfor() {
//     // infor1st = document.querySelector("product-sale");
//     infor1st = document.querySelector(".image--product--item");
//     infor2st = document.querySelector(".item--title--click");
//     infor3st = document.querySelector(".item--price");
//     document.querySelector(".image--product--bill").innerHTML = infor1st.innerHTML;
//     document.querySelector(".bill--product--price").innerHTML = infor3st.innerHTML;

// }
// function totalBill() {
//     count = document.querySelector(".count").value;
//     price = document.querySelector(".price--button").value;
//     document.getElementsByClassName(".bill--product--total") = count * price;
// }
function click() {
    var cart = JSON.parse(localStorage.getItem("cart"));
            if(cart != null){
               gioHang = cart;
            }
            else {
                var gioHang = [];
            }
    // var gioHang = [];
    var btn = document.getElementsByClassName("action--cart");
    for(let i =0; i< btn.length; i++){
        btn[i].addEventListener("click", function(){
            var hinh = btn[i].parentElement.childNodes[1].src;
            var ten = btn[i].parentElement.nextElementSibling.childNodes[1].innerText;
            var gia = btn[i].parentElement.nextElementSibling.lastElementChild.childNodes[3].value;
            var soluong =2;
            var sp ={
                "Hinh" :hinh,
                "Gia" : gia,
                "Soluong" : soluong
            }
            gioHang.push(sp);
            console.log(gioHang);
            // alert(hinh)

            // luu trinh duyet
            localStorage.setItem("cart", JSON.stringify(gioHang));
            // lay
            onLoad();
        });
    }
}
click();
function onLoad() {
    var cart = JSON.parse(localStorage.getItem("cart"));
            if(cart != null){
                document.getElementById("number--product").innerHTML = cart.length;
            }
}
function loadDataHome(){
    onLoad();
    showProductNew();
    showCart();
}
function showProductNew() {

}
function loadDataCart() {
    onLoad();
    showCart();
}
function showCart() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart != null){
        var kq = " ";
        for (let i = 0; i < cart.length; i++) {
            var total = parseInt(cart[i]["Gia"]*cart[i]["Soluong"]);
            kq += `
                        <div class="image--product--bill">
                            <img src="`+ cart[i]["Hinh"] +`" alt="image--bill" class="image--bill">
                        </div>
                        <div class="bill--product--price">`+cart[i]["Gia"]+`</div>
                        <div class="bill--product--quantity">
                            <input class="count" type="number" name="quantity" min="1" max="100" value="`+ 2+`">
                        </div>
                        <div class="bill--product--total" >`+ total +`</div>
                        
                    `;
                console.log(kq);
        }
        document.getElementById("hello").innerHTML = kq;
    }
}

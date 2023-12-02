// const express = require('express')
// const app = express()
// const port = 8080

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
    var cart = JSON.parse(localStorage.getItem("cart"));
            if(cart != null){
               gioHang = cart;
            }
            else {
                var gioHang = [];
            }
    var btn = document.getElementsByClassName("action--cart");
    for(let i =0; i< btn.length; i++){
        btn[i].addEventListener("click", function(){
            var hinh = btn[i].parentElement.childNodes[1].src;
            var ten = btn[i].parentElement.nextElementSibling.childNodes[1].innerText;
            var gia = btn[i].parentElement.nextElementSibling.lastElementChild.childNodes[3].value;
            var discountDisplay = btn[i].parentElement.childNodes[3].innerText;
            var discount = btn[i].parentElement.childNodes[5].value;

            var soluong = 1 ;
            var checkSame = 0;
            // var productS = new Array(hinh,ten,gia,discountDisplay,discount);
            // Check trung ten
            for (let j = 0; j < gioHang.length; j++) {
                if(gioHang[j]["Ten"] == ten){
                    gioHang[j]["Soluong"] += soluong;
                    alert("Đã Thêm Số Lượng")
                    checkSame = 1 ;
                    break;
                }              
            }
            // neu checkSame == 0 thi khong co trung
            if(checkSame == 0){
                var addToCart ={"Ten" : ten,"Hinh" :hinh,"Gia" : gia,"Soluong" : soluong,"Giamgia" : discount,"Giamgiahienthi" : discountDisplay.substring(5)};
                gioHang.push(addToCart);
                alert("Đã Thêm");
            }
            // luu trinh duyet
            localStorage.setItem("cart", JSON.stringify(gioHang));
            onLoad();
        });
    }
function onLoad() {
    var cart = JSON.parse(localStorage.getItem("cart"));
            if(cart != null){
                document.getElementById("number--product").innerHTML = cart.length;
            }
}
function showCart() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart != null){
        var kq = " ";
        for (let i = 0; i < cart.length; i++) {
            var total = parseInt(cart[i]["Gia"] * cart[i]["Soluong"] - (cart[i]["Soluong"]*cart[i]["Gia"] *cart[i]["Giamgia"] ));
            
            kq += `
                    <div class="bill--table">
                    <div class="image--product--bill">
                    <img src="`+ cart[i]["Hinh"] +`" alt="image--bill" class="image--bill">
                </div>
                <div class="name--product">`+cart[i]["Ten"]+`</div>
                <div class="bill--product--price">`+cart[i]["Gia"]+`</div>
                <div class="bill--product--quantity" >
                    <button onclick= "down(this,`+i+`)" class="minus">-</button>
                    <span class="quantity">`+cart[i]["Soluong"]+`</span>
                    <button onclick= "up(this,`+i+`)" class="plus">+</button>
                </div>
                <div class="bill--product--total" >`+ cart[i]["Giamgiahienthi"] +`</div>
                <a  href="/Bookweb/Bill/index.html" class="remove--product" onclick="delCartMember(this)">Xóa</a> 
                </div>                     
                    `;
        }
        var cartTable =document.getElementById("add--bill").innerHTML = kq;
    }
}
function delCart() {
        localStorage.removeItem("cart");
        onLoad();
}
function totalProduct() {
    var cart = gioHang;
    if(cart != null){
        var total = 0;
        for (let i = 0; i < cart.length; i++) {
            var totalPrice = parseInt(cart[i]["Gia"]*cart[i]["Soluong"] - (cart[i]["Soluong"]*cart[i]["Gia"] *cart[i]["Giamgia"] ));
            total += totalPrice;
        }
        document.querySelector(".total--product--selled").innerHTML =  "Tổng Đơn Hàng: " + total +" ₫";       
    }
}
totalProduct();
function up(x,i) {
    // get so luong trong span
    let td = x.parentElement;
    var sl = parseInt(td.childNodes[3].innerHTML);
    //++
    var newslPlus = sl +1;
    // gan lai
    td.childNodes[3].innerHTML= newslPlus;
    //update vi tri x trong gioHang voi so luong moi
    cart[i]["Soluong"] = newslPlus;
    
    // goi ham tinh tong va gan cho tong
    totalProduct();
}
function down(a,i) {
    let td = a.parentElement;
    var sl = parseInt(td.childNodes[3].innerHTML);
    var newslMinus = sl -1;
    td.childNodes[3].innerHTML = newslMinus;
    if(newslMinus < 1){
         newslMinus = 0;
        delCartMember(this);
    }
    cart[i]["Soluong"] = newslMinus;
    totalProduct();
}
function delCartMember(index) {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : JSON.parse(localStorage.setItem("cart"));
    if(confirm ("Bạn có muốn xóa không")){
    cart.splice(index,1);
}
localStorage.setItem("cart", JSON.stringify(cart));
    onLoad();
    showCart();
    totalProduct();
}
function clickPay(){
    if(cart == null){
     alert("Chưa có đơn hàng")
    }
    console.log(cart.length)
 }
 function loadDataHome(){
    onLoad();
}
 function loadDataCart() {
        onLoad();
        showCart();
        // totalProduct();
}
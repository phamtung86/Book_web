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
    var target = new Date(2023, 11, 11, 15,46, 0,0);
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
    var time = h + ":" + m + ":" + s +session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(timeReve,1000);
    
}
timeReve();
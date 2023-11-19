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
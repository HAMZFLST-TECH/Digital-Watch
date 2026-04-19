// Built by: HAMZATAYYAB AKA HAMZFLST-TECH

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    let h = currentTime.getHours();


    hrs.textContent = (h % 12 || 12).toString().padStart(2, "0");
    min.textContent = currentTime.getMinutes().toString().padStart(2, "0");
    sec.textContent = currentTime.getSeconds().toString().padStart(2, "0");
}, 10);

// Built by: HAMZATAYYAB AKA HAMZFLST-TECH
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
   let date = new Date();

   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   let hourRotation = 30 * hh + mm / 2;
   let minRotation = 6 * mm;
   let secRotation = 6 * ss;

   hour.style.transform = `rotate(${hourRotation}deg)`;
   min.style.transform = `rotate(${minRotation}deg)`;
   sec.style.transform = `rotate(${secRotation}deg)`;
}, 1000);

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

setInterval(() => {
   let date = new Date();
   hour.textContent = date.getHours();
   min.textContent = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
   sec.textContent = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
}, 1000);

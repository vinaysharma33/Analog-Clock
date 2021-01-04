let Hour=document.getElementById('hour');
let Minutes=document.getElementById('minutes');
let Seconds=document.getElementById('seconds');

setInterval(() => {
    let d=new Date();
    let thour=d.getHours();
    let tminute=d.getMinutes();
    let tsecond=d.getSeconds();

    let hourRotate=(30*thour+1/2*tminute);
    let minuteRotate=6*tminute;
    let secondRotate=6*tsecond;

    Hour.style.transform=`rotate(${hourRotate}deg)`;
    Minutes.style.transform=`rotate(${minuteRotate}deg)`;
    Seconds.style.transform=`rotate(${secondRotate}deg)`;
}, 1000);
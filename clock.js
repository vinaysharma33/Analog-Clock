setInterval(() => {
    let d=new Date();
    let thour=d.getHours();
    let tminute=d.getMinutes();
    let tsecond=d.getSeconds();

    let hourRotate=(30*thour+1/2*tminute);
    let minuteRotate=6*tminute;
    let secondRotate=6*tsecond;

    hour.style.transform=`rotate(${hourRotate}deg)`;
    minutes.style.transform=`rotate(${minuteRotate}deg)`;
    seconds.style.transform=`rotate(${secondRotate}deg)`;
}, 1000);
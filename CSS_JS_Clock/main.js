const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');

function displayTime(){
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const hrs_degree = (hrs*30)+(mins/2)+90;
    const mins_degree = (mins*6)+(secs/10)+90;
    const secs_degree =(secs*6)+90;
    hr.style.transform  = `rotate(${hrs_degree}deg)`;
    min.style.transform  = `rotate(${mins_degree}deg)`;
    sec.style.transform  = `rotate(${secs_degree}deg)`;
}
setInterval(displayTime,1000);
displayTime();

const time = document.getElementsByClassName('time')[0];
function getHour(){
    const date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    time.textContent = hours + ' ' + (am_pm);
}
setInterval(getHour, 1000);
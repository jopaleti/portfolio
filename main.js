const time = document.getElementsByClassName('time')[0];
function getHour(){
    const date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var minutes = date.getMinutes();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    time.textContent = hours + ':' + minutes + ' ' + (am_pm);
}
setInterval(getHour, 1000);
const close = document.getElementsByClassName('closed');
const icon = document.getElementsByClassName('material-icons');
const display = document.getElementsByClassName('nav-item3')[0];

function away(){
    display.style.top = '-500px';
}

function show(){
    display.style.top = '0px';
    console.log('hello');
}

// function close(){
//     display.style.top = '-500px';
// }
// console.log('gjqwyg');
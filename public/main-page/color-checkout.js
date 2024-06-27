let setting = JSON.parse(localStorage.getItem('setting'));
if(!setting){
    setting = {'color': 'black', 'contrast': 0};
}


var paybtn = document.querySelector('.pay-btn');
var page = document.querySelector('.page')
const colorChange = function(){
    var num = 255 - setting.contrast;
    page.style.backgroundColor = `rgb(${num},${num},${num})`

    if(setting.color == 'red'){
        paybtn.style.backgroundColor = "#f00";
        paybtn.style.borderColor = "#f00";
    }
    if(setting.color == 'yellow'){
        paybtn.style.backgroundColor = "#ff0";
        paybtn.style.borderColor = "#ff0";
    }
    if(setting.color == 'blue'){
        paybtn.style.backgroundColor = "#00f";
        paybtn.style.borderColor = "#00f";
    }
    if(setting.color == 'black'){
        paybtn.style.backgroundColor = "#000";
        paybtn.style.borderColor = "#000";
    }
}


colorChange();


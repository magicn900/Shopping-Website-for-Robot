let setting = JSON.parse(localStorage.getItem('setting'));
if(!setting){
    setting = {'color': 'black', 'contrast': 0};
}


var addToCartD = document.querySelector('.add-to-cart-d');
var page = document.querySelector('.page')
const colorChange = function(){
    var num = 255 - setting.contrast;
    page.style.backgroundColor = `rgb(${num},${num},${num})`
    if(setting.color == 'red'){
        addToCartD.style.backgroundColor = "#f00";
        addToCartD.style.borderColor = "#f00";
    }
    if(setting.color == 'yellow'){
        addToCartD.style.backgroundColor = "#ff0";
        addToCartD.style.borderColor = "#ff0";
    }
    if(setting.color == 'blue'){
        addToCartD.style.backgroundColor = "#00f";
        addToCartD.style.borderColor = "#00f";
    }
    if(setting.color == 'black'){
        addToCartD.style.backgroundColor = "#000";
        addToCartD.style.borderColor = "#000";
    }
}


colorChange();


let setting = JSON.parse(localStorage.getItem('setting'));
if(!setting){
    setting = {'color': 'black', 'contrast': 0};
}

var game = document.querySelectorAll('.game');
var gameS = document.querySelectorAll('.game-s');
var addToCart = document.querySelectorAll('.add-to-cart');
var addToCartS = document.querySelectorAll('.add-to-cart-s');
var page = document.querySelector('.page')
const colorChange = function(){
    var num = 255 - setting.contrast;
    page.style.backgroundColor = `rgb(${num},${num},${num})`

    if(setting.color == 'red'){
        for (var i = 0; i < addToCartS.length; i++) {
            gameS[i].style.borderColor = "#f00";
            addToCartS[i].style.borderColor = "#f00";
            addToCartS[i].style.backgroundColor = "#f00";
        }
        for (var i = 0; i < addToCartS.length; i++) {
            game[i].style.borderColor = "#f00";
            addToCart[i].style.borderColor = "#f00";
            addToCart[i].style.backgroundColor = "#f00";
        }
    }
    if(setting.color == 'yellow'){
        for (var i = 0; i < addToCartS.length; i++) {
            gameS[i].style.borderColor = "#ff0";
            addToCartS[i].style.borderColor = "#ff0";
            addToCartS[i].style.backgroundColor = "#ff0";
        }
        for (var i = 0; i < addToCartS.length; i++) {
            game[i].style.borderColor = "#ff0";
            addToCart[i].style.borderColor = "#ff0";
            addToCart[i].style.backgroundColor = "#ff0";
        }
    }
    if(setting.color == 'blue'){
        for (var i = 0; i < addToCartS.length; i++) {
            gameS[i].style.borderColor = "#00f";
            addToCartS[i].style.borderColor = "#00f";
            addToCartS[i].style.backgroundColor = "#00f";
        }
        for (var i = 0; i < addToCartS.length; i++) {
            game[i].style.borderColor = "#00f";
            addToCart[i].style.borderColor = "#00f";
            addToCart[i].style.backgroundColor = "#00f";
        }
    }
    if(setting.color == 'black'){
        for (var i = 0; i < addToCartS.length; i++) {
            gameS[i].style.borderColor = "#000";
            addToCartS[i].style.borderColor = "#000";
            addToCartS[i].style.backgroundColor = "#000";
        }
        for (var i = 0; i < addToCartS.length; i++) {
            game[i].style.borderColor = "#000";
            addToCart[i].style.borderColor = "#000";
            addToCart[i].style.backgroundColor = "#000";
        }
    }
}


colorChange();


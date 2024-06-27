let setting = JSON.parse(localStorage.getItem('setting'));
if(!setting){
    setting = {'color': 'black', 'contrast': 0};
}


var settingTitle = document.querySelectorAll('.setting-title');
var page = document.querySelector('.page')
const colorChange = function(){
    var num = 255 - setting.contrast;
    page.style.backgroundColor = `rgb(${num},${num},${num})`

    if(setting.color == 'red'){
        for (var i = 0; i < settingTitle.length; i++) {
            settingTitle[i].style.borderColor = "#f00";
        }
    }
    if(setting.color == 'yellow'){
        for (var i = 0; i < settingTitle.length; i++) {
            settingTitle[i].style.borderColor = "#ff0";
        }
    }
    if(setting.color == 'blue'){
        for (var i = 0; i < settingTitle.length; i++) {
            settingTitle[i].style.borderColor = "#00f";
        }
    }
    if(setting.color == 'black'){
        for (var i = 0; i < settingTitle.length; i++) {
            settingTitle[i].style.borderColor = "#000";
        }
    }
}


colorChange();
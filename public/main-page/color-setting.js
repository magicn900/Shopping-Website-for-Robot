let setting = JSON.parse(localStorage.getItem('setting'));
if(!setting){
    setting = {'color': 'black', 'contrast': 0};
}

const contrastRatioValue = document.querySelector('#Contrast-ratio');
const redbtn = document.querySelector('.red');
const bluebtn = document.querySelector('.blue');
const yellowbtn = document.querySelector('.yellow');
const blackbtn = document.querySelector('.black');

redbtn.addEventListener('click', function() {
    updateSetting('color', 'red');
});

bluebtn.addEventListener('click', function() {
    updateSetting('color', 'blue');
});

yellowbtn.addEventListener('click', function() {
    updateSetting('color', 'yellow');
});

blackbtn.addEventListener('click', function() {
    updateSetting('color', 'black');
});


contrastRatioValue.addEventListener('change', function() {
    updateSetting('contrast', contrastRatioValue.value);
});


function updateSetting(type, value) {
    if (type == 'color') {
        setting.color = value;
    } else if (type == 'contrast') {
        setting.contrast = value;
    }
    localStorage.setItem('setting', JSON.stringify(setting));
}

var profile = document.querySelector('.profile');
var settings = document.querySelector('.setting');
var page = document.querySelector('.page')
const colorChange = function(){
    var num = 255 - setting.contrast;
    page.style.backgroundColor = `rgb(${num},${num},${num})`
    if(setting.color == 'red'){
        settings.style.borderColor = "#f00";
        profile.style.borderColor = "#f00";
    }
    if(setting.color == 'yellow'){
        settings.style.borderColor = "#ff0";
        profile.style.borderColor = "#ff0";
    }
    if(setting.color == 'blue'){
        settings.style.borderColor = "#00f";
        profile.style.borderColor = "#00f";
    }
    if(setting.color == 'black'){
        settings.style.borderColor = "#000";
        profile.style.borderColor = "#000";
    }
}

colorChange();

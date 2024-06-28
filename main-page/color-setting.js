let setting = JSON.parse(localStorage.getItem('setting'));
if(!setting){
    setting = {'color': 'black', 'contrast': 0};
}

const contrastRatioValue = document.querySelector('#Contrast-ratio');
const redbtn = document.querySelector('.red');
const bluebtn = document.querySelector('.blue');
const yellowbtn = document.querySelector('.yellow');
const blackbtn = document.querySelector('.black');
const confirmBtn = document.querySelector('.confirm')

redbtn.addEventListener('click', function() {
    updateSetting('color', 'red');
    location.reload();
});

bluebtn.addEventListener('click', function() {
    updateSetting('color', 'blue');
    location.reload();
});

yellowbtn.addEventListener('click', function() {
    updateSetting('color', 'yellow');
    location.reload();
});

blackbtn.addEventListener('click', function() {
    updateSetting('color', 'black');
    location.reload();
});


confirmBtn.addEventListener('click', function(){ 
    updateSetting('contrast', contrastRatioValue.value);
    location.reload();
})


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
var page = document.querySelector('.page');
const colorChange = function(){
    if(setting.color == 'red'){
        var num = 255 - setting.value;
        page.style.backgroundColor = `rgb(${num},${num},${num})` 
        settings.style.borderColor = "#f00";
        profile.style.borderColor = "#f00";
        confirmBtn.style.borderColor = "#f00";
        confirmBtn.style.backgroundColor = "#f00";
    }
    if(setting.color == 'yellow'){
        settings.style.borderColor = "#ff0";
        profile.style.borderColor = "#ff0";
        confirmBtn.style.borderColor = "#ff0";
        confirmBtn.style.backgroundColor = "#ff0";
    }
    if(setting.color == 'blue'){
        settings.style.borderColor = "#00f";
        profile.style.borderColor = "#00f";
        confirmBtn.style.borderColor = "#00f";
        confirmBtn.style.backgroundColor = "#00f";
    }
    if(setting.color == 'black'){
        settings.style.borderColor = "#000";
        profile.style.borderColor = "#000";
        confirmBtn.style.borderColor = "#000";
        confirmBtn.style.backgroundColor = "#000";
    }
}

colorChange();

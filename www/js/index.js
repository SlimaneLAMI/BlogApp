document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
}

$(document).ready(function(){
    $('.sidenav').sidenav(); 
    $('.carousel').carousel();
    setInterval(function(){
        $('.carousel').carousel('next');
    }, 2500);


});
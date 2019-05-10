//  GLOBAl
window.infoFilme;
window.background;

function loadBackground() {
    window.background.style.background = "url(" + window.infoFilme['Images']['Background'] + ")";
    window.background.style.backgroundSize = "cover";
    window.background.style.backgroundPosition = "center";
    window.background.style.backgroundRepeat = "no-repeat";
    window.background.style.position = "initial";
}

//LOAD PAGINA
requestInfo.onload = function () {
    window.infoFilme = requestInfo.response;
    loadBackground();
    contentChange('general');
}

//LOAD SEASON
requestSeason.onload = function () {
    window.infoSeason = JSON.parse(requestSeason.response);
}
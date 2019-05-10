//REQUISIÇÃO JSON INFOS
var requestInfoURL = 'https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json';
var requestInfo = new XMLHttpRequest();
requestInfo.open('GET', requestInfoURL);
requestInfo.responseType = 'json';
requestInfo.send();
// //REQUISIÇÃO JSON INFOS
// var requestSeasonURL = 'https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json';
// var requestSeason = new XMLHttpRequest();
// requestSeason.open('GET', requestSeasonURL);
// requestSeason.responseType = 'json';
// requestSeason.send();


var requestSeason = new XMLHttpRequest(),
        method = "GET",
        url = "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json";

requestSeason.open(method, url, true);
requestSeason.onreadystatechange = function () {
        if (requestSeason.readyState === XMLHttpRequest.DONE && requestSeason.status === 200) {
                window.infoSeason = JSON.parse(requestSeason.response);
                return createSeason();
        }
};
requestSeason.send();
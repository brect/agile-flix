//  GLOBAl
window.infoFilme;
window.background;

function loadBackground() {
    window.background.style.background = "url(" + window.infoFilme['Images']['Background'] + ")";
    window.background.style.backgroundSize = "cover";
    window.background.style.backgroundPosition = "center" + "center";
    window.background.style.backgroundRepeat = "no-repeat";
    window.background.style.backgroundAttachment = "fixed";
}


//LOAD PAGINA
requestInfo.onload = function () {
    window.infoFilme = requestInfo.response;
    window.inf
    loadBackground();
    contentChange('general');
}


//CRIA CAST
function createCast(name, person) {
    let div = document.createElement('div');
    div.innerHTML = "<h2>" + name + "</h2>" + "<h3 style=" + "font-size:14px" + ">" + person + "</h3>";
    document.getElementById("content").appendChild(div).className = "box-cast";;
}






function contentChange(param) {
    // console.log('param', param);
    // console.log('filme', window.infoFilme);
    switch (param) {
        case 'general':
            document.getElementById("content").innerHTML =
                '<div class="general">' +
                '<span class="acoes">' +
                '<img src="images/add-gray-s.svg" alt="Adicionar na lista">' +
                '<h3>My Lista</h3>' +
                '</span>' +
                '<span class="acoes">' +
                '<img src="images/sad-gray-w.svg" alt="Avaliar Reprodução">' +
                '<h3>Evaluar</h3>' +
                '</span>' +
                '<span class="acoes">' +
                '<img src="images/rec-gray-s.svg" alt="Gravar Reprodução">' +
                '<h3>Grabar</h3>' +
                '</span>' +
                '<span class="acoes">' +
                '<img src="images/share-gray-s.svg" alt="Compartilhar Reprodução">' +
                '<h3>Compartir</h3>' +
                '</span>' +
                '</div>' +
                '<div class="general" id="sinopse">' +
                '<h2>SINOPSE</h2>' +
                '<h3>' + window.infoFilme['Synopsis'] + '</h3>' +
                '</div>';
            break;
        case 'cast':
            document.getElementById("content").innerHTML = "";

            for (let i = 0; i <= window.infoFilme['Cast'].length; i++) {
                // console.log('i=' + i, window.infoFilme['Cast'][i]);
                var name = window.infoFilme['Cast'][i]['Name'];
                var person = window.infoFilme['Cast'][i]['ID'];
                createCast(name, person);
            }
            break;

        case 'premios':
            document.getElementById("content").innerHTML = "";
            break;

        default:
            break;
    }
}



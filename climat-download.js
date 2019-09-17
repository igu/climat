var el = document.querySelectorAll('.field-id');
var novoDownload = document.createElement('a');

/*
    DOWNLOAD: BOLETINS com ETAPAS
*/

var i = 0;
var downloads = setInterval(getDiarios, 3000);

function getDiarios() {
    if (i === el.length) {
        stopDiarios();
    }
    novoDownload.setAttribute('href', 'https://suap.ifrn.edu.br/edu/emitir_boletins_pdf/' + el[i].innerHTML + '/');
    novoDownload.setAttribute('download', 'Boletim_' + el[i].innerHTML + '');
    novoDownload.click();

    novoDownload.setAttribute('href', 'https://suap.ifrn.edu.br/edu/diario_pdf/' + el[i].innerHTML + '/0/');
    novoDownload.setAttribute('download', 'Diario_Completo_' + el[i].innerHTML + '');
    novoDownload.click();
    i++;
}

function stopDiarios() {
    clearInterval(downloads);
}
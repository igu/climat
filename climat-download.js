var el = document.querySelectorAll('.field-id');
var novoDownload = document.createElement('a');

/*
    DOWNLOAD: BOLETINS com ETAPAS
*/ 

for (var i = 0; i < el.length; i++) {
	novoDownload.setAttribute('href','https://suap.ifrn.edu.br/edu/emitir_boletins_pdf/' + el[i].innerHTML +'/');
	novoDownload.setAttribute('download','Boletim:' + el[i].innerHTML + '');
    novoDownload.click();

    novoDownload.setAttribute('href','https://suap.ifrn.edu.br/edu/diario_pdf/' + el[i].innerHTML +'/0/');
    novoDownload.setAttribute('download','Diario_Completo:' + el[i].innerHTML +'');
    novoDownload.click();
}
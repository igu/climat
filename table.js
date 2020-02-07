/*  
    * etapas 
        1. va ate suap.ifrn.edu.br/admin/diario
        2. selecione periodo e semestre
        3. clique em "mostrar tudo"
        4. o table.js faz o resto
*/

var items = document.getElementsByTagName('tbody')[0].rows;
var objetos = [];

function nomeMateriaFormatado(nomeMateria) {
    let materia = nomeMateria.split("-");
    return materia[1].substr(1, materia[1].length - 2);
}

for (var i = 0; i < items.length; i++) {
    
    var objeto = {
        codigo: items[i].getElementsByClassName('field-id')[0].innerText,
        materia: nomeMateriaFormatado(items[i].getElementsByClassName('field-componente_curricular')[0].innerText),
    }
    objetos.push(objeto)
}

console.log(objetos);
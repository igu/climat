/*  
    * etapas 
        1. va ate suap.ifrn.edu.br/admin/diario
        2. selecione periodo e semestre
        3. clique em "mostrar tudo"
        4. o table.js faz o resto
*/

const items = document.getElementsByTagName('tbody')[0].rows;
const objetos = [];

function nomeMateriaFormatado(nome) {
    let materia = nome.split("-");
    return materia[1].substr(1, materia[1].length - 2);
}

function qtdProfessores(index){
    return items[index].getElementsByClassName('field-get_outras_informacoes')[0].getElementsByTagName('li').length;
}

function nomeProfessorFormatado(index) {
    let nome = items[index].getElementsByClassName('field-get_outras_informacoes')[0].textContent.split('Professores:'),
        nome_formatado = nome[1].split('(');
    console.log(nome_formatado[0].substr(1, nome_formatado[0].length - 2));
    return nome_formatado[0].substr(1, nome_formatado[0].length - 2);
}

for (let i = 0; i < items.length; i++) {
    
    let qtd = qtdProfessores(i),
        codigo = items[i].getElementsByClassName('field-id')[0].innerText,
        materia = nomeMateriaFormatado(items[i].getElementsByClassName('field-componente_curricular')[0].innerText);

    if(qtd > 1) {
      /*  while ( qtd != 0) {  // mais de um professor
            objetos.push({ codigo, materia, professor });
            qtd--;
        } */
    } else {
        let professor = nomeProfessorFormatado(i);
        objetos.push({ codigo, materia, professor });
    }
}

console.log(objetos);
/*  
    * etapas 
        1. va ate suap.ifrn.edu.br/admin/diario
        2. selecione periodo e semestre
        3. clique em "mostrar tudo"
        4. o table.js faz o resto
    
        falta: conexão com banco para gerar relatorio .pdf 
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

function nomeProfessorFormatado(nomeArray) {
    let nome_formatado = nomeArray.split(' '),
        tamanho = nome_formatado.length,
        nome = '';
    let i = 0;
    while ( tamanho > 1 ) {
        nome += nome_formatado[i++] + ' ';
        tamanho--;
    }
    return nome.substr(0, nome.length - 1);
}

for (let i = 0; i < items.length; i++) {
    
    let qtd = qtdProfessores(i),
        codigo = items[i].getElementsByClassName('field-id')[0].innerText,
        materia = nomeMateriaFormatado(items[i].getElementsByClassName('field-componente_curricular')[0].innerText),
        items_save = items[i].getElementsByClassName('field-get_outras_informacoes')[0],
        professor;

    if(qtd > 1) { // VARIOS PROFESSORES
        const lista_professores = items_save.getElementsByTagName('ul')[0].getElementsByTagName('li');
        while ( qtd != 0) {
            professor = nomeProfessorFormatado(lista_professores[--qtd].innerText);
            objetos.push({ codigo, materia, professor });
        }
    } else { // UNICO PROFESSOR
        let professor_nome = items_save.textContent;
        professor_nome = professor_nome.split('Professores:');
        professor = nomeProfessorFormatado(professor_nome[1]);
        objetos.push({ codigo, materia, professor });
    }
}

console.log(objetos);
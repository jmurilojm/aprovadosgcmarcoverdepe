// lista de aptos;
let candidatosValidadosAmpla = [];
let candidatosValidadosFeminino = [];
let candidatosValidadosPCD = [];
let candidatosDesistentes = [];


validarLista(candidatosAmpla, candidatosValidadosAmpla, 'Ampla');
validarLista(candidatosFeminino, candidatosValidadosFeminino, 'Feminino');
validarLista(candidatosPCD, candidatosValidadosPCD, 'PCD');


exibirLista(candidatosValidadosAmpla, '#listagemAmpla');
exibirLista(candidatosValidadosFeminino, '#listagemFeminino');
exibirLista(candidatosValidadosPCD, '#listagemPCD');
exibirLista(candidatosDesistentes, '#listagemDesistentes');



// funcoes;

function validarLista(listaDeCandidados, listaParaSalvarCandidatosValidados, nomeLista) {
  listaDeCandidados.forEach((c, i) => {
    // verificar a situacao do candidado nas fases;
    if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
      listaParaSalvarCandidatosValidados.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
    } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
    } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
    } else if (c.taf === true && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    } else if (c.taf === false && c.psi === false) {
      console.log(c.nome, nomeLista);
      candidatosDesistentes.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1, lista: nomeLista })
}
  });
}

function exibirLista(lista, idLista) {
  lista.forEach((c, i) => {
    if (c.matricula === '-------') {
      document.querySelector(idLista).innerHTML += `<tr class='aguardando'>
                    <td class="center">${i+1}º</td>
                    <td class="center">${c.matricula}</td>
                    <td class="capitalize center">${c.nome.toLowerCase()}</td>
                    <td class="center">${c.classificacao}º</td>
                  </tr>`;
    } else {
      document.querySelector(idLista).innerHTML += `<tr>
                <td class="center">${i+1}º</td>
                <td class="center">${c.matricula}</td>
                <td class="capitalize center">${c.nome.toLowerCase()} - ${c.lista}</td>
                <td class="center">${c.classificacao}º</td>
              </tr>`;
    }
  });
}



// fim;
function adicionarTarefa() {
  let novaTarefa = document.getElementById("digite");
  let conteudoNovaTarefa = novaTarefa.value;

 let novalinha = document.createElement("input");
 novalinha.type = 'checkbox'; 
 novalinha.onclick = 'tachado';
 
 let novalinhaB = document.createElement("label");
 novalinhaB = document.createTextNode(conteudoNovaTarefa);
 //novalinhaB.classList.add('check1');

 let linhaBreak = document.createElement("br");

 let docLista = document.getElementById("linha");
 docLista.appendChild(linhaBreak);
 docLista.appendChild(novalinha);
 docLista.appendChild(novalinhaB);

 


  // var novaTarefa = document.getElementById("digite");
  // var conteudoNovaTarefa = novaTarefa.value;

  
  // console.log ('conteudo ',novaTarefa);

  // var check1 = document.getElementById("check1");
  // var conteudoCheck1 = check1.value;

  // check1.innerHTML = "<br> <input type=checkbox> <label >Fazer mercado II</label>";

 
 
}
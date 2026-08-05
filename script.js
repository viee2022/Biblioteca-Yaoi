const biblioteca = [];

const lista = document.getElementById("biblioteca");

function atualizarBiblioteca(){

lista.innerHTML="";

biblioteca.forEach((manga)=>{

lista.innerHTML += `

<div class="manga">

<img src="${manga.capa}">

<h3>${manga.nome}</h3>

<p>Capítulo ${manga.atual}/${manga.total}</p>

<button onclick="window.open('${manga.link}')">

Ler Agora

</button>

</div>

`;

});

}

biblioteca.push({

nome:"Love is an Illusion",

atual:87,

total:120,

link:"https://google.com",

capa:"https://placehold.co/300x420"

});

biblioteca.push({

nome:"Jinx",

atual:73,

total:"...",

link:"https://google.com",

capa:"https://placehold.co/300x420"

});

atualizarBiblioteca();

document.getElementById("novo").onclick = ()=>{

alert("Na próxima etapa vamos abrir uma tela para cadastrar mangás.");

}

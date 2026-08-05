let biblioteca =
JSON.parse(localStorage.getItem("biblioteca")) || [];

const lista = document.getElementById("biblioteca");

function atualizarBiblioteca(){

localStorage.setItem(
"biblioteca",
JSON.stringify(biblioteca)
);

lista.innerHTML="";

biblioteca.forEach((manga,index)=>{

lista.innerHTML+=`

<div class="manga">

<img src="${manga.capa}">

<h3>${manga.nome}</h3>

<p>📖 ${manga.atual}/${manga.total}</p>

<p>🔵 ${manga.status}</p>

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

const modal = document.getElementById("modal");

document.getElementById("novo").onclick=()=>{

modal.style.display="flex";

}

document.getElementById("salvar").onclick = ()=>{

const manga={

nome:document.getElementById("nome").value,

capa:document.getElementById("capa").value || "https://placehold.co/300x420",

link:document.getElementById("link").value,

atual:Number(document.getElementById("capAtual").value),

total:Number(document.getElementById("capTotal").value),

status:document.getElementById("status").value

};

biblioteca.push(manga);

atualizarBiblioteca();

modal.style.display="none";

document.getElementById("nome").value="";
document.getElementById("capa").value="";
document.getElementById("link").value="";
document.getElementById("capAtual").value="";
document.getElementById("capTotal").value="";

}

# Eventos DOM nas funções

## click

Um dos eventos DOM mais utilizados, o evento de clique, geralmente atribuido em botões, mas não impede de ser atribuido a qualquer elemento HTML.

No código html abaixo há uma div que a partir do evento de clique <code>onclick=""</code> é ativada a função <code>clicar()</code> 

````js
// <div id="area" onclick="clicar()">Interaja...</div> 
````

No code JS é configurada a função <code>clicar()</code> e selecionada a div pelo seu id area:

````js
var area = window.document.getElementById('area');

function clicar(){
    area.innerText = 'Clicou!'
    area.style.background = 'black';
    area.style.color = 'antiquewhite';
}
````

## mouseenter

Evento de entrada do mouse no elemento

````js
// <div id="area" onmouseenter="entrar()">Interaja...</div> 

function entrar(){
    window.document.getElementById('area').style.background = 'lightcoral';
}
````  

## mouseout

Evento de saída do mouse no elemento, dessa vez o evento foi atribuído pelo addEventListener que a partir do evento <code>mouseout</code> ativa a função de seta ou arrow function <code>() =>{}</code>

````js
// <div id="area">Interaja...</div> 

var area = window.document.getElementById('area');

area.addEventListener('mouseout', () =>{
    area.innerText = 'Saiu!';
})
````  

## mousemove

Quando o mouse entre no elemento e se move

````js
// <div id="area" onmousemove="mover()">Interaja...</div> 

var area = window.document.getElementById('area');

function mover(){
    area.innerText = 'Movendo...'
}
````

## mousedown

Quando o mouse é pressionado mas não é solto

````js
// <div id="area" onmousedown="down()">Interaja...</div> 

var area = window.document.getElementById('area');

function down(){
    area.innerText = 'Apertou';
}
````

## mouseup

Quando o mouse foi pressionado e solto, semelhante ao clique

````js
// <div id="area">Interaja...</div> 

var area = window.document.getElementById('area');
area.addEventListener('onmouseup', mouseUp);

function mouseUp (){
    area.style.filter = 'grayscale(100%)';
}
````

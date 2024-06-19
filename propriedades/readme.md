# Propriedades JS

## classList

O classList é uma propriedade do JavaScript que representa uma lista de classes CSS. Ele fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.

A partir do classList podemos:

## .add()

Para adicionar uma classe a um elemento HTML, podemos usar o método add() do classList. Este método aceita o nome da classe como argumento e adiciona a classe ao elemento, se ela ainda não estiver presente. Conforme exemplo a seguir:

````js
const element = document.getElementById('meuElemento');
element.classList.add('minhaClasse');
````

## .remove()

Para remover uma classe de um elemento HTML, podemos utilizar o método remove() do classList. Este método aceita o nome da classe como argumento e remove a classe do elemento, se ela estiver presente. Veja o exemplo abaixo:

````js
const element = document.getElementById('meuElemento');
element.classList.remove('minhaClasse');
````

## .toggle()

O método toggle() do classList permite alternar uma classe em um elemento. Se a classe já estiver presente no elemento, o método a remove; caso contrário, ele a adiciona, conforme exemplo a seguir:

````js
const element = document.getElementById('meuElemento');
element.classList.toggle('minhaClasse');
````

## .contains()

Para verificar se uma classe específica está associada a um elemento, podemos usar o método contains() do classList, como no exemplo:

````js
const element = document.getElementById('meuElemento');
if (element.classList.contains('minhaClasse')) {
    alert('Seu estilo CSS será aplicado no elemento!')
}
````

## Substituindo classes

Como feito em aula, podemos substituir uma classe por outra usando os métodos add() e remove() em sequência.

````js
const element = document.getElementById('meuElemento');
element.classList.remove('classeAntiga');
element.classList.add('classeNova');
````

## Manipulando várias classes simultaneamente

É possível adicionar ou remover várias classes de uma vez usando o método add() ou remove() passando vários argumentos separados por vírgula. Veja o exemplo:

````js
const element = document.getElementById('meuElemento');
element.classList.add('classe1', 'classe2', 'classe3');
element.classList.remove('classe2', 'classe3');
````

## setInterval e clearInterval

````js
let myAnim = setInterval(moveElements, 2000);
    
function stopAnim() {
clearInterval(myAnim);
}
````

O código define um intervalo para a animação dos elementos usando a função moveElements, que acontecerá a cada dois segundos graças ao segundo argumento do setInterval (2000 milissegundos). A função stopAnim está utilizando clearInterval para interromper a animação quando chamada.

## Propriedade parentNode

A propriedade parentNode é utilizada para acessar o nó pai de um elemento no DOM. Por meio dela, podemos navegar pela árvore do DOM em direção ao nó pai do elemento atual.

Exemplo de uso:

Suponha que temos o seguinte código HTML:

````js
// <div id="container">
//   <p>Este é um parágrafo</p>
// </div>
````

Agora, podemos usar o ‘parentNode’ para acessar o elemento pai do parágrafo:

````js
const paragraph = document.querySelector('p');
const parentElement = paragraph.parentNode;

console.log(parentElement.id); // Saída: "container"
````

## Propriedade childNodes

A propriedade childNodes é utilizada para acessar todos os nós filhos de um elemento no DOM. Ela retorna uma lista de nós, incluindo nós de texto e elementos HTML.

Exemplo de uso:

Considerando o mesmo HTML do exemplo anterior, podemos usar o childNodes para obter todos os nós filhos do elemento com o ID "container":

````js
const container = document.getElementById('container');
const childNodes = container.childNodes;

console.log(childNodes.length); // Saída: 1 (o nó de texto "\n  " é considerado um nó filho)
console.log(childNodes[0].nodeName); // Saída: "#text"
console.log(childNodes[1].nodeName); // Saída: "P"
````

## Propriedade nextElementSibling

A propriedade nextElementSibling permite acessar o próximo irmão (nó adjacente) de um elemento no DOM.

Exemplo de uso:

Vamos considerar o seguinte HTML:

````js
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
````

Agora, podemos usar o nextElementSibling para acessar o próximo irmão de um elemento < li >:

````js
const item1 = document.querySelector('li:first-child');
const item2 = item1.nextElementSibling;

console.log(item2.textContent); // Saída: "Item 2"
````

## Propriedade previousElementSibling

A propriedade previousElementSibling é semelhante ao nextElementSibling, mas permite acessar o irmão anterior (nó adjacente) de um elemento no DOM.

Exemplo de uso:

Continuando o exemplo anterior, vamos usar o previousElementSibling para acessar o irmão anterior do elemento < li > que selecionamos:

````js
const item3 = document.querySelector('li:last-child');
const item2 = item3.previousElementSibling;

console.log(item2.textContent); // Saída: "Item 2"
````

## innerText

É uma propriedade que modifica somente o texto de um documento HTML

````js
// HTML
// <p id='paragrafo'></p>

window.document.getElementById('paragrafo').innerText = 'Estou aguardando...';
````

## innerHTML

É uma propriedade que modifica o texto de um documento HTML

````js
// HTML
// <div id='texto'></div>

window.document.getElementById('texto').innerHTML = '<strong>Texto em strong</strong>';
````

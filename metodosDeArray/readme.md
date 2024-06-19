# Métodos

## Split

O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

````js
var frase1 = "Esta é a frase que vamos manipular";
console.log(frase1.split(" "));  
//(7) ['Esta', 'é', 'a', 'frase', 'que', 'vamos', 'manipular']  

const frase = 'Frase teste pra brincar';

const chars = frase.split('');
console.log(chars[0]);
// F

const words = frase.split(' ');
console.log(words[3]);
// brincar

const fraseCompleta = frase.split();
console.log(fraseCompleta);
const fraseComplet = frase.split('  ');
console.log(fraseComplet);
// ['Frase teste pra brincar'] ['Frase teste pra brincar']
````

## indexOf

O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array ou variáveis simples, retorna -1 caso o mesmo não esteja presente.

````js
var fraseDois = "Eu quero a última palavra teste desta frase de teste";
console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));
console.log(fraseDois.indexOf("testes", 3));

// Saída: 
// > 26
// > 47
// > -1
````

## Element.addEventListener()

The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

Esse método é frequentemente usado na organização do arquivo javascript, quando também há arqivos html, css, e outros. 

No exemplo abaixo há um botão no documento HTML com a classe: <code>app__card-button--foco</code>

Esse botão foi selecionado. O método addEventListener(), com o evento de clique, ativa a função que adiciona a classe active ao botão com o método .ClassList.add

````js
// HTML
// <button data-contexto="foco" class="app__card-button app__card-button--foco">Foco</button>

const focoBt = document.querySelector('.app__card-button--foco')

focoBt.addEventListener('click', () => {
    focoBt.classList.add('active')
})
````

# Métodos JS

## .getAttribute

O método getAttribute é usado para obter o valor de um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos recuperar o valor. Por exemplo:

````js
// HTML: <div id="meuElemento" data-info="Eis um exemplo de atributo">

const elemento = document.getElementById('meuElemento');
const valorDoAtributo = elemento.getAttribute('data-info');
console.log(valorDoAtributo); // Saída: "Eis um exemplo de atributo"
````

## .setAttribute

O método setAttribute é usado para definir ou modificar o valor de um atributo em um elemento HTML. Ele aceita dois argumentos: o primeiro é o nome do atributo que queremos definir ou modificar, e o segundo é o valor que queremos atribuir a esse atributo. Se o atributo já existir, o método setAttribute irá sobrescrevê-lo; caso contrário, ele criará um novo atributo. Por exemplo:

````js
// HTML: <p id="meuParagrafo">Texto inicial</p>

const paragrafo = document.getElementById('meuParagrafo');
paragrafo.setAttribute('id', 'paragrafoModificado');
paragrafo.setAttribute('data-novo-atributo', 'Novo valor');
````

## .hasAttribute

O método hasAttribute é usado para verificar se um elemento possui um atributo específico. Ele recebe um argumento, que é o nome do atributo que queremos verificar. O método retornará true se o atributo existir e false se o atributo não estiver presente. Vejamos um exemplo:

````js
// HTML: <a href="https://www.exemplo.com" id="meuLink">Link de exemplo</a>

const link = document.getElementById('meuLink');
const temHref = link.hasAttribute('href');
console.log(temHref); // Saída: true
const temTarget = link.hasAttribute('target');
console.log(temTarget); // Saída: false
````

## .removeAttribute

O método removeAttribute é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover. Por exemplo:

````js
// HTML: <img src="imagem.jpg" alt="Imagem de exemplo" id="minhaImagem">

const imagem = document.getElementById('minhaImagem');
imagem.removeAttribute('alt');
````

# Curso: Javascript Métodos Array:

## .forEach()

Percorre cada elemento do array e transforma cada um em uma função

````js
let livros = ['JS', 'Python', 'Java']

livros.forEach(livro => {
    console.log(livro)
})

//JS
//Python
//Java
````

O método forEach é semelhante ao for, porém menos verboso e mais simples visualmente

````js
let livros = ['JS', 'Python', 'Java']

for(let i = 0; i < livros.length; i++){
    console.log(livros[i])
} for (let i in livros) {
    console.log(livros[i])
}

//JS
//Python
//Java
````

# .map()

* Percorre cada elemento do array.
* Retorna valores um uma nova função.
* Sem alterar os valores da original

````js
const arrayl = [1, 4, 9, 16];

// pass a function to map
const mapl = arrayl.map(x => x * 2);

console.log(mapl);
console.log(arrayl);
// [2, 8, 18, 32]
// [1, 4, 9, 16]
````

# Array.filter()

* Percorre cada elemento do array.
* Retorna valores um uma nova função de acordo com um filtro.
* Fazendo um filtro booleano
* Sem alterar os valores da original

````js
const idades = [8, 18, 27, 40, 12]

const podeDirigir = idades.filter(idade => {
    return idade >= 18
})

console.log(`As idades são: ${idades}.`)
console.log(`As idades que podem dirigir são: ${podeDirigir}.`)

// As idades são: 8,18,27,40,12.
// As idades que podem dirigir são: 18,27,40.
````

# Array.short() ordenação

* retorna uma array ordenada intável
* Com base no Unicode
* Se algum desses elementos for undefined ele joga pto final do array
* Para uma ordenação estável é preciso criar uma função
* Em ordem crescente: a - b
* Em ordem decrescente: b - a

````js
let precos = [ 70, 30, 4, undefined, 99, 1, 101]

let precosOrdenados = precos.sort()
console.log(`Ordenação instável [${precosOrdenados}]`)
//Ordenação instável [1,101,30,4,70,99,]

let precosOrdenadosAB = precos.sort((a, b) => a - b)
console.log(`Do menor para o maior [${precosOrdenadosAB}]`)
//Do menor para o maior [1,4,30,70,99,101,]

let precosOrdenadosBA = precos.sort((a, b) => b - a)
console.log(`Do maior para o menor [${precosOrdenadosBA}]`)
//Do maior para o menor [101,99,70,30,4,1,]
````

# Array.reduce()

* Pega todo o array e reduz em uma única função

````js
let precos = [ 70, 30, 4, 100]

// O primeiro parâmetro é o acumulador
// O segundo parâmetro é cada elemento
const precoTotal = precos.reduce((acc, elementoAtual) => acc + elementoAtual)
console.log(precoTotal) //204

const maiorPreco = precos.reduce((acc, elementoAtual) => acc > elementoAtual ? acc : elementoAtual)
console.log(maiorPreco) //100

const menorpreco = precos.reduce((acc, elementoAtual) => acc < elementoAtual ? acc : elementoAtual)
console.log(menorpreco) //4

const precoSubtraido = precos.reduce((acc, elementoAtual) => acc - elementoAtual)
console.log(precoSubtraido) //-64
````

# Método fetch()
* Método assícrono
* Que tem como parâmetro obrigatório a url da API
* Retorna uma promisse


# Método .concat( )
[ 🏀 , 🏀 , 🏀 ].concat( [ ⚾ , ⚾ ] ) => [🏀 , 🏀 , 🏀, ⚾ , ⚾ ]

O método concat junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.

# Método .pop( )
[ 🏀 , 🏀 , 🏀, 🏀 , ⚽ ].pop( ) => [🏀 , 🏀 , 🏀, 🏀]

O método pop remove o último elemento de um array.

# Método .push( )
[🏀 , 🏀 , 🏀].push(🏈) => [ 🏀 , 🏀 , 🏀, 🏈 ]

O método push adiciona um novo elemento no final do array, aumentando seu tamanho.

# Método .includes()
[ ⚾ , 🏈, ⚽, 🏀 ].includes( ⚽ ) => true

O método includes verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.

# Método .fill( )
[ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽, 1 ) => [ ⚾ , ⚽, ⚽, 🏀 ] [ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽ ) => [ ⚽, ⚽, ⚽, ⚽ ]

O método fill preenche os elementos especificados em um array com um determinado valor.

# Método .indexOf( )
[ ⚾ , 🏈, ⚽, 🏀, ⚽ ].indexOf( ⚽ ) => 2

O método indexOf retorna o primeiro índice encontrado de um valor especificado. Se o valor não for encontrado o método retorna -1.

# Método .reverse( )
[ ⚾ ,🏈, ⚽, 🏀 ].reverse( ) => [🏀, ⚽,🏈, ⚾]

O método reverse inverte a ordem dos elementos de um array e substitui o array original.

# Método .slice( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].slice( 1, 3 ) => [ 🏈, ⚽ ]

O método slice retorna elementos de um array, selecionados de determinada posição de início até determinada posição final. O elemento na posição final não é incluso.

# Método .some( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].some( ( 🏐 ) ⇒ { return bola === 🏐 } ) => true

O método some verifica se algum elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para um dos elementos, e false se o teste for false para todos os elementos. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

# Método .join( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join() ⇒ ⚾,🏈,⚽,🏀,🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘ ’) ⇒ ⚾🏈⚽🏀🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘-’) ⇒ ⚾-🏈-⚽-🏀-🏐

O método join puxa elementos de um array e lista no formato de string, o resultado da operação puxou as propriedades do array e as listou de acordo com o que foi determinado.

# Método .shift( )
[⚽, 🏐 , 🏐 , 🏐, 🏐].shift( ) ⇒[🏐 , 🏐 , 🏐, 🏐]

O método shift é parecido com o método .pop() mas ao invés de remover o último elemento do array, ele é usado para remover o primeiro elemento do array.

# Método .unshift( )
[🏀 , 🏀 , 🏀].unshift(🏐) ⇒ [ 🏐, 🏀 , 🏀 , 🏀]

O método unshift é parecido com o que método .push() realiza, mas ao invés de adicionar no final do array, ele é utilizado para adicionar um elemento no início de um array.

# Método .splice( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 1, 2, 🎱 ) ⇒ [⚾ ,🎱, 🏀, 🏐 ] [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 2, 3) ⇒ [⚾, 🏈 ]

Com o método splice conseguimos escolher um índice inicial e final para substituirmos valores no lugar deles. E também podemos remover itens, no segundo exemplo, foram removidos três elementos a partir da posição dois.

# Método .length( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length(3) ⇒ ⚾ , 🏈, ⚽ [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length() ⇒ 5

O método length define ou retorna o número de elementos em um array.

# Método .toString( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].toString ⇒ ⚾,🏈,⚽,🏀,🏐

O método toString retorna uma string com todos os valores do array separados por vírgulas.

# Método .findIndex( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].findIndex(emoji => emoji === “⚽”) ⇒ 2

O método findIndex retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

# Método .find( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].find( bola ⇒ bola.formato === “redonda” ) => ⚾

O método find é utilizado para procurar um elemento dentro do array que atenda a condição atribuída a ele, que retornará o primeiro elemento encontrado. Ele percorre todo o array buscando o elemento que atenda a condição e retorna o primeiro que foi encontrado, caso não encontre retorna undefined. Este método não executa caso o array esteja vazio e não altera o array original

# Método .at( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(-1) ⇒ 🏐 / [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(1) ⇒ 🏈

O at acessar os elementos de um array usando um índice inteiro positivo e negativo, sendo que o índice negativo enumera os itens de trás para frente, portando o 🏐 está posicionado no índice -1.

# Método .isArray( )
var bolas = [ ⚾ , 🏈, ⚽, 🏀, 🏐 ] Array.isArray(bolas) ⇒ true

O método Array.isArray verifica se a variável é um array e retorna true ou false.

# Método .every( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].every( ( bola ) ⇒ { return bola === 🏐 } ) => false

O método every verifica se cada elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para todos os elementos, e false se o teste for false para pelo menos um elemento. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

# Método .copyWithin( )
[ ⚾ , 🏈, ⚽, 🏀 ].copyWithin(2,0) ⇒ [ ⚾ , 🏈, ⚾ , 🏈 ]

O método copyWithin copia os elementos do array para outra posição no array, ele não adiciona itens apenas substitui os valores existentes.

# Método .lastIndexOf( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].lastIndexOf(⚽) ⇒ 2

O método lastIndexOf retorna o valor do último índice especificado, se o valor não for encontrado ele retorna -1.

# Método .valueOf( )
[ ⚽, ⚾ , 🏀, 🏐 ].valueOf() ⇒ [ ⚽, ⚾ , 🏀, 🏐 ]

O método valueOf é usado para retornar o array. É um método padrão do objeto Array. Este método retorna todos os itens na mesma matriz. Ele não altera o conteúdo original da matriz e não contém nenhum valor de parâmetro.

# Método .keys( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].keys() => ["0","1","2","3"]

O método keys retorna um novo array composto pelas chaves (posições) do array o qual ele foi aplicado.

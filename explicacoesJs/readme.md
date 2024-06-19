# N sei q nome da:

## Sumário:

* Métodos básicos
* Variáveis
* Propriedades
* Selecionando elementos

## Métodos

## alert

Exibe um pop up na tela

````js
alert("Olá mundo!")
````

## confirm

Exibe um pop up na tela com as opções ok e cancelar

````js
confirm('Aceita os cookies?')
````

## prompt

Exibe um pop up na tela com uma caixa de texto para digitar informações

````js
prompt('Qual seu nome?')
````

Para pegar essas informações é necessário armazenar esse prompt em uma variável:

````js
let nome = prompt('Qual seu nome?')
````

## Variáveis

## const

variável constante, que não aceita mudança de valores que se declarada no escopo local não pode ser acessada no escopo global

## var 

variaável válida no escopo local e global

````js
function newFunction() {
    var hello = "hello";
}
console.log(hello); //hello is not defined
````

Variáveis de var podem ser declaradas de novo e atualizadas

````js
var greeter = "hey hi";
console.log(greeter); //hey hi
var greeter = "say Hello instead";
console.log(greeter); //say Hello instead
````

## Hoisting de var

Hoisting é um mecanismo do JavaScript que faz com que as declarações de variáveis e de funções sejam movidas para o topo de seu escopo antes da execução do código. Portanto, se fizermos isso:

````js
console.log (greeter); //undefind
var greeter = "say hello"
````

## let

variável que se declarada no escopo local não pode ser acessada no escopo global e costuma ser utilizada para variáveis que mudarão seus valores futuramente. let não pode ser declarado novamente no mesmo escopo.

````js
let greeting = "say Hi";
let greeting = "say Hello instead";
console.log(greeting)

//SyntaxError: Identifier 'greeting' has already been declared
````

Mas em escopos diferntes é possivel:

````js
let greeting = "say Hi";
    if(true){
        let greeting = "say Hello instead";
        console.log(greeting)  //say Hello instead
    }
    console.log(greeting) //say Hi
````

## Propriedades

## function.length 

length é uma propriedade de um objeto função, e indica quantos parãmetros a função recebe

````js
console.log(function () {}.length); /* 0 */
console.log(function (a) {}.length); /* 1 */
console.log(function (a, b) {}.length); /* 2 */
````

## string.length

A propriedade length de um objeto String contém o comprimento da string, quantos caracteres a string tem

````js
var frase = 'Teste de length Js. Resposta:';
console.log(`${frase} ${frase.length}`);
// Saída: Teste de length Js. Resposta: 29
````

## Selecionando elementos:

* .getElementsByTagName('')[] --> por tag/marca
* .getElementById('') --> por Id
* .getElementsByName('')[] --> por name
* .getElementsByClassName('')[]; --> por class
* .querySelector --> pega o primeiro seletor
* .querySelectorAll --> pega todos os seletores

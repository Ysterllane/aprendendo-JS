# Aprendendo de Javascript

# Sumário

* Sinal de +
* Conversão strint to number
* Converção number to sting
* Concatenação ' + '
* Template string `${}`
* Formatar número (casas decimais, trocas)
* Formatar string (maíusculas e minúsculas)
* Operadores aritiméticos (+ - * / ** %)
* Ordem de precedência
* Simplificações (+= -= *= /= **= %=)
* Operadores de atribuição(++ --)
* Operadores relacionais (>= <= == > <)
* Operadores relacionais de identidade (!= === !===)
* Operadores Lógicos: ordem de execução
* Ordem de execução dos operadores
* Operadores ternários
* Selecionando elementos
* Estrutura de condicionais
* switch
* while
* do while
* for & for in
* Array/ vetor
* Basico de Funções
* Introdução a objetos

## Sinal de +
* (number + number) para adição
* (string + string) para concatenação

## Conversão strint to number:
* Number.parseInt();
* Number.parseFloat();
* Number();

## Converção number to sting:
* prompt sempre retorna uma string
* String(x);
* x.toString();

## Concatenação
* alert('A soma de ' + n1 + ' e ' + n2 + ' é ' + soma);

## Template string
* alert(`A soma de ${n1} e ${n2} é ${soma}`);
* com crase

## Formatar número
* x.toFixed(2); <b>Duas casas decimais no number</b>
* x.toFixed(2).replace('.', ','); <b>troca . por ,</b>
* x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) <br>
<b>toLocaleString = localizar string pelo país</b> <br>
<b>currency = money</b>

## Formatar string
* .toUpperCase() <b>transformar em MAIÚSCOLAS</b>
* .toLowerCase() <b>transformar em minúscolas</b>

## Operadores aritiméticos
* divisão: 5/2 = 2.5
* resto da divisão: 5%2 = 1
* potenciação: 5** = 25

### Ordem de precedência
* 1° () 
* 2° ** potências 
* 3° * e / e % 
* 4° + e -

### Simplificações
* var n = 3
* n = n + 4 --> n += 4
* n = n - 5 --> n -= 5
* n = n * 6 --> n *= 6
* n = n / 10 --> n /= 10
* n = n ** 1 --> n **= 1
* n = n % 2 --> n %= 2

## Operadores de atribuição
* n = n + 1 --> n++
* n = n - 1 --> n--

## Operadores relacionais
Retornam true or false (valor booleano)
* > < >= <= == (igual) != (diferente)

### Operadores relacionais de identidade
* 5 === 5 true (5 é identico a 5?)
* 5 === '5' false (o operador identidade compara valor e tipo)
* 5 == 5 true
* 5 == '5' true (o operador igual compara somente valores)
* 5 != '5' false
* 5 !== '5' true (desigual restrito)

## Operadores Lógicos: ordem de execução
* 1° ! (negação)
* 2° && (conjunção 'e')
* 3° || (disjunção 'ou')

## Ordem de execução dos operadores
* 1° operadores aritiméticos
* 2° operadores relacionais
* 3° operadores lógicos

# Operadores ternários
* teste ? true : false
* média >= 7 ? 'Aprovado : 'Reprovado'

## DOM: Docment Object Model

### árvore DOM
<img src"./imgs/arvoreDOM">

## Selecionando elementos:
* .getElementsByTagName('')[] --> por tag/marca
* .getElementById('') --> por Id
* .getElementsByName('')[] --> por name
* .getElementsByClassName('')[]; --> por class
* .querySelector --> pega o primeiro seletor
* .querySelectorAll --> pega todos os seletores

## Estrutura de condicionais:
* if (simples)
* if {} else {} (composta)
* if {} else if {} else {} (aninhadas)
* switch (multipla) -->img

## switch

Estrutura switch:

````js
switch (key) {
    case value:        
         break;        
    default:
         break;
}
````

Código exemplo:

````js
var chamada = new Date();
var diaDaSemana = chamada.getDay();

console.log(diaDaSemana);

switch(diaDaSemana){
    case 0:
        console.log('Domingo!');
        break;
    case 1:
        console.log('Segunda!');
        break;
    case 2:
        console.log('Terça!');
        break;
    case 3:
        console.log('Quarta!');
        break;
    case 4:
        console.log('Quinta!');
        break;
    case 5:
        console.log('Sexta!');
        break;
    case 6:
        console.log('Sábado!');
        break;
    default:
        console.log('[ERRO] Dia inválido!');
        break;                    
}
````

## while

Estrutura de repetição com teste lógico no início. Exemplo:

````js
var c = 1

while(c <= 3){
    console.log(`Passo: ${c}`)
    c++
}
// Saída:
// Passo: 1
// Passo: 2
// Passo: 3
````

## do while

Estrutura de repetição com teste lógico no final

````js
var c = 1

do {
    console.log(`Passo: ${c}`)
    c++ 
} while(c <= 3)

// Saída:
// Passo: 1
// Passo: 2
// Passo: 3
````

## For

Estrutura de repetição com variavel de controlhe:
for (inicio; teste lógico; incremento) {}

````js
for (var c = 1; c <= 3 ;c++){
    console.log(`Passo: ${c}`)
}
````

## For in

For para vetores, estrututa:

for (const key in object) {}

Exemplo de utilização:

````js
let num = [5, 2, 8, 9, 3]
for (let i in num) {
    console.log(`Posição: ${i}, elemento: ${num[i]}`)
}

// Saída:
// Posição: 0, elemento: 5
// Posição: 1, elemento: 2
// Posição: 2, elemento: 9
````

## Array / vetor

São variáveis compostas que armazenam mais de um elemento, cada elemento tem um valor e um indice de identificação qe começa em zero. Exemplo:

````
let num = [5, 2, 8, 9, 3]
````

### add um elemento no vetor:

Na posição 5, adicione o elemento 1

````js
num[5] = 1
````

Na ultima posição, adicione o elemento 6

````js
num.push(6)
````

Quantidade de posições:

````js
num.length
````

Exibir um elemento específico

````js
console.log(`O primeiro valor do vetor é ${num[0]}`)
````

Ordenar o vetor de forma crescente:

````js
num.sort()
````

For para vetores:

````js
for (let i in num) {
    console.log(`Posição: ${i}, elemento: ${num[i]}`)
}
````

Saber a posição de um elemento:

````js
let position = num.indexOf(3)

if (position == -1){
    console.log('O valor não foi encontrado :(')
} else {
    console.log(`O valor está na posição ${position}`)
}
````

## Funções:

* São ações executadas assim que são chamadas ou em decorrência de algum evento
* Pode receber parâmetros e retornar um resultado

Verificar se o número é impar ou par:

````js
function parOuImpar(n) {
    if (n%2 == 0){
        return `par`
    } else {
        return `impar`
    }
}

// chamada
let res = parOuImpar(11)
console.log(res)

// saída: par
````

Dois

## Objetos

Variavés compostas que guardam valores, variáves, funcões e métodos

````js
let amigo = {nome:'José', sexo:'mas', peso:85.4, engordar(p){
    peso + 2
}}
````

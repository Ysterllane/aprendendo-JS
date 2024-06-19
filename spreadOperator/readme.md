# spread operator (...)

O spread operator (...) em JavaScript é uma sintaxe que permite "espalhar" os elementos de um array ou as propriedades de um objeto em outro array ou objeto.

Imagine que você tem um array com alguns valores, por exemplo:

````js
const numeros = [1, 2, 3];
````

Se você quiser criar um novo array com esses mesmos valores, você poderia fazer assim:

````js
const novoArray = [...numeros];
````

O que o spread operator está fazendo aqui é "espalhando" os elementos do array numeros dentro do novo array novoArray. Então, novoArray terá os mesmos valores que numeros, mas será uma cópia independente.

Você também pode usar o spread operator para combinar arrays:

````js
const numeros = [1, 2, 3,];
const outrosNumeros = [4, 5, 6];
const todosNumeros = [...numeros, ...outrosNumeros];

console.log(numeros)
console.log(outrosNumeros)
console.log(todosNumeros)

// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
````

Nesse caso, o spread operator "espalha" os elementos dos dois arrays (numeros e outrosNumeros) dentro do novo array todosNumeros.

O spread operator funciona de maneira semelhante com objetos. Você pode criar uma cópia de um objeto usando o spread operator:

````js
const pessoa = { nome: 'João', idade: 30 };
const novaPessoa = { ...pessoa };
````

Também é possível alterar e adicionar elementos no array de objetos:

````js
const pessoa = { nome: 'João', idade: 30 };
const novaPessoa = { ...pessoa, nome: 'Gostoso', altura: 1.8 };

console.log(pessoa)
console.log(novaPessoa)

// { nome: 'João', idade: 30 }
// { nome: 'Gostoso', idade: 30, altura: 1.8 }
````


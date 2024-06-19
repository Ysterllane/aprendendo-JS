# Instâncias JS

## new Date()

Propriedade que acessa: dias da semana, hora...

Nesta aula, aprendemos como utilizar o objeto Date para formatar minutos e segundos. Entretanto, é possível utilizar suas propriedades e métodos para mais funcionalidades, como manipular e exibir datas e horas no seu código.

Vamos conferir mais formas de seu uso?

Para criar uma instância do objeto ‘Date’, você pode usar uma das várias formas de construção:

Construtor sem argumentos:
const dataAtual = new Date();
COPIAR CÓDIGO
Construtor com argumentos (ano, mês, dia, hora, minuto, segundo, milissegundo):
const dataEspecifica = new Date(2023, 7, 3, 12, 30, 0, 0);
COPIAR CÓDIGO
Construtor com uma string que representa a data (formato padrão é "yyyy-mm-dd"):
const dateString = "2023-08-03";
const formatoDeData = new Date(dateString);
COPIAR CÓDIGO
Uma vez criado um objeto Date, você pode acessar informações específicas da data e hora, como o ano, mês, dia, hora, minuto e segundo usando os métodos de acesso do objeto:

const currentDate = new Date();

const ano = currentDate.getFullYear();  // Acessa o ano
const mês = currentDate.getMonth(); // Acessa o mês - Janeiro é 0, Fevereiro é 1, ..., Dezembro é 11
const dia = currentDate.getDate(); // Acessa o dia
const horas = currentDate.getHours(); // Acessa as horas 
const minutos = currentDate.getMinutes(); // Acessa os minutos
const segundos = currentDate.getSeconds(); // Acessa os segundos
const milissegundos = currentDate.getMilliseconds();  // Acessa os milissegundos 
COPIAR CÓDIGO
Você também pode modificar a data e hora usando os métodos de definição:

const data = new Date();

data.setFullYear(2024);  // Define o ano
data.setMonth(10); // Define o mês
data.setDate(25); // Define o dia
data.setHours(10);  // Define as horas
data.setMinutes(30); // Define os minutos
data.setSeconds(0); // Define os segundos
COPIAR CÓDIGO
Além disso, o objeto ‘Date’ também fornece vários métodos para trabalhar com datas, como comparar datas, adicionar ou subtrair períodos de tempo, obter o dia da semana, entre outros.

Lembre-se de que, dependendo do fuso horário e configurações regionais do sistema em que o código está sendo executado, os resultados podem variar. Se você precisar de mais funcionalidades e suportes a diferentes formatos de zonas de tempo, uma boa alternativa é o uso de bibliotecas de manipulação de datas, como o Moment.js ou o date-fns.

### .getHours()

````js
var hora = new Date().getHours();
````

Pega as horas de 0 a 23 do servidor

### .getFullYear()

````js
var ano = new Date().getFullYear();
````
Pega o ano com 4 digitos

# Métodos JS

## .addEventListener

A sintaxe básica é a seguinte:

````js
elemento.addEventListener(evento, callback);
````
Onde:

* elemento: É o elemento HTML ao qual queremos associar o evento.
* evento: É uma string que representa o tipo de evento que desejamos capturar.
* callback: É a função que será chamada quando o evento ocorrer.

## Tipos de Eventos

### Eventos de clique (click)

Os eventos de clique são alguns dos mais utilizados em desenvolvimento web. Eles ocorrem quando o usuário clica em um elemento específico da página, como um botão, um link ou até mesmo em uma imagem. Podemos usar o evento click para executar ações quando o usuário interage com esses elementos.

````js
// HTML <button id="meuBotao">Clique aqui</button>

const meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function() {
  alert("O botão foi clicado!");
});
````

### Eventos de teclado (keydown, keyup, keypress)

Os eventos de teclado permitem que respondamos às ações do usuário no teclado, como pressionar ou soltar uma tecla específica. Existem três principais tipos de eventos de teclado:

* keydown: Ocorre quando uma tecla é pressionada. 
* keyup: Ocorre quando uma tecla é solta.
* keypress: Ocorre quando uma tecla é pressionada e ainda não foi solta.

````js
//HTML<input type="text" id="meuInput" />

const meuInput = document.getElementById("meuInput");
meuInput.addEventListener("keydown", function(event) {
  console.log(`Tecla pressionada: ${event.key}`);
});
````

### Eventos de foco (focus, blur)

Os eventos de foco são usados quando queremos capturar quando um elemento recebe ou perde o foco. 

* O evento focus ocorre quando o elemento ganha o foco (por exemplo, quando clicamos em um campo de formulário)

* Enquanto o evento blur ocorre quando o elemento perde o foco.

````js
//HTML <input type="text" id="meuCampo" />

const meuCampo = document.getElementById("meuCampo");
meuCampo.addEventListener("focus", function() {
  console.log("Campo ganhou o foco.");
});

meuCampo.addEventListener("blur", function() {
  console.log("Campo perdeu o foco.");
});
````

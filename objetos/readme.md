# Objetos

## Objeto ‘Audio’

Para criar um novo objeto ‘Audio’, podemos simplesmente usar a seguinte sintaxe:

````js
const audioElement = new Audio('./caminho-do-arquivo-de-audio/nomeDoArquivo.mp3');
````

### Controles básicos de áudio

Após criar um objeto ‘Audio’, podemos controlar sua reprodução e outras propriedades usando métodos e propriedades disponíveis.

* play(): inicia a reprodução do áudio;
* pause(): pausa a reprodução do áudio;
* currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
* volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.

### Exemplo de utilização dos métodos do objeto Audio:

````js
const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');

audioElement.play(); // Inicia a reprodução
audioElement.pause(); // Pausa a reprodução
audioElement.currentTime = 10; // Move para 10 segundos no áudio
audioElement.volume = 0.5; // Define o volume para metade (50%)
````


# Manipulando CSS e HTML pelo Javascript

## style

É possível maniplar o HTML acessando todas as propriedades CSS

### .background / ..backgroundColor

Manipula a cor de funto daqele elemento selecionado

````js
// HTML
// <p id="result">Aqui vai o resultado</p>
var p1 = window.document.getElementsByTagName('p')[0];
p1.style.background = 'lightpink'
````

## .backgroundImage

Manipula o elemento colocando uma imagem de fundo.

````js
window.document.body.style.backgroundImage = 'url(variaveis.PNG)'
````

## .border

Manipula o elemento colocando uma borda

````js
window.document.body.style.border = '5px solid black'
````

## .borderColor

Manipula o elemento colocando uma cor de borda.

Para utilizar essa propriedade é necessário definir width e border-style antes 

````js
window.document.body.style.borderColor = 'black'
````

## .borderImagem

Manipula o elemento colocando uma imagem de borda.

Ao utilizar a propriedade border-image, é necessário aplicar também a propriedade border antes, junto dos três valores que a acompanham: width, border-style e color.

Estas duas últimas propriedades (border-style e color) serão sobrepostas pela imagem, e apenas o width será aplicado. 

````js
window.document.body.style.borderImage = 'url(imagem.jpg) 50 round'
````

#### .borderLeft
#### .borderLeftColor
#### .borderLeftStyle
#### .borderLeftWidth
#### .borderRadius
#### .borderStyle
#### .borderTop
#### .borderTopColor...

## .color

Muda a cor do texto do elemento

````js
p1.style.color = 'darkBlue';
````

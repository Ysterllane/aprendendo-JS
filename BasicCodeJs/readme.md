# Explicação do código Javascript:

<strong>var p1 = window.document.getElementsByTagName('p')[0];</strong>

* É recomndável a criação de uma variável para melhor organização e entendimento do código
* <code>window</code> Acesso à janela
* <code>.document</code> Acesso ao documento HTML
* <code>.getElementsByTagName('p')</code> Acesso aos elementos pelo nome da tag, no caso aos parágrafos
* <code>[0];</code> Acesso, expecíficamente, ao primeiro elemento parágrafo
<hr>

<strong>window.document.body.style.background = 'yellow'</strong>

* <code>.body.style.background</code> Acesso ao 'body', seu 'style' e por fim o 'background'
* <code>.background = 'yellow'</code> Estilização para cor 'yellow'
<hr>

<strong>window.document.write(`Está escrito assim: ${p1.innerText}`);</strong>

* <code>.write(`Está escrito assim: `);</code> comando escreva (´´);
* <code>p1.innerText</code> Acesso somente ao texto
* Caso fosse <code>p2.innerHTML</code> seria acesso ao texto + as tags HTML, pegando assim o strong

# Teoria Javascript

* Float = point float = ponto flutuante = número decimal

## Callbacks

Callbacks são, basicamente, funções enviadas como parâmetro para outras funções.

Essas funções acontecem, geralmente, depois de um tempo que o setTimeout faz o envio ou de acordo com alguma interação do usuário com a tela, como um clique ou uma seleção de mouse. Existem várias situações que podem ser Callbacks e as mais usadas são as requisições.

````js
console.log('Mandando oi pro amigo!')

function mandaMensagem(){
    console.log('Tudo bem?')
    console.log('Vou te mandar uma solicitação')
    console.log('Solicitação recebida')
}
setTimeout(mandaMensagem, 5000)

console.log('Bye bye')

// Mandando oi pro amigo!
// Bye bye
// Tudo bem?
// Vou te mandar uma solicitação
// Solicitação recebida
````

# Mockando APIs REST com json-server

No dia a dia das empresas, é comum consumirmos APIs REST em nossos frontends. Eventualmente pode ser necessário desenvolvermos o frontend primeiro ou em paralelo, ao backend.

Quando isso acontece, temos de simular de alguma forma os dados enviados pelo backend, ou seja, dizemos que estamos trabalhando com mocks ou “mockando” o backend. Mock nada mais é que o nome dado para um conteúdo inventado e utilizado apenas como um marcador de posição.

Existem várias formas de se fazer isso. Uma delas, é pelo json-server. Resumidamente, o json-server vai simular uma API REST, com todos os endpoints de um recurso: GET, POST, PUT e DELETE. Assim, o nosso frontend consome essa API simulada, possibilitando a criação de toda a camada HTTP da aplicação.

PARA ATIVAR SÓ DIGITAR

jasn-server nomeDoArquivo.json

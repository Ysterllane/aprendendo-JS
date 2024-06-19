# Promisse

* Uma promessa de que algo irá acontecer

````js
const entrega = new Promise(function
(resolve, reject) {
    if (recebeu == true) {
        resolve('Ana recebeu a encomenda!')
    } else {
        reject('Não foi possível receber a encomenda!')
    }
})
````

Promisses podem exercer 3 estados:

* "fulfilled" deu certo / completa
* "rejected" deu errado
* "pending" incompleta

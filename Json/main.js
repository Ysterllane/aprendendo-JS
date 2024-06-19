const objs = [
    {
        "nome": "Object One",
        "preco": 1200,
        "autor": "Ysterllane",
        "quantidade": "infinity",
        "categoria": "front-end"
    },
    {
        "nome": "Object Two",
        "preco": 3000,
        "autor": "Yster",
        "quantidade": null,
        "categoria": "back-end"
    },
    {
        "nome": "Object Three",
        "preco": 1000000,
        "autor": "Kitty",
        "quantidade": "A lot",
        "categoria": "full stack"
    }
]

// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.preco)
})
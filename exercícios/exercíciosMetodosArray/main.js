//const elementoSectionLivros = document.querySelector('#livros')
const obj = 'requisicao.txt'

// converter objeto para json
const jsonData = JSON.stringify(obj)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

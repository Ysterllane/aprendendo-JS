let precos = [ 70, 30, 4, 100]

// O primeiro parâmetro é o acumulador
// O segundo parâmetro é cada elemento
const precoTotal = precos.reduce((acc, elementoAtual) => acc + elementoAtual)
console.log(precoTotal) //204

const maiorPreco = precos.reduce((acc, elementoAtual) => acc > elementoAtual ? acc : elementoAtual)
console.log(maiorPreco) //100

const menorpreco = precos.reduce((acc, elementoAtual) => acc < elementoAtual ? acc : elementoAtual)
console.log(menorpreco) //4

const precoSubtraido = precos.reduce((acc, elementoAtual) => acc - elementoAtual)
console.log(precoSubtraido) //-64

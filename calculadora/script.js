var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))
var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração:")

switch (operacao){
    case 1:
        var resultado = primeiroValor/segundoValor
        document.write(`<h2> ${primeiroValor} /  ${segundoValor} = ${resultado} </h2>`)
        break
    case 2: 
        var resultado = primeiroValor * segundoValor
        document.write(`<h2> ${primeiroValor} x ${segundoValor} = ${resultado} </h2>`)
        break
    case 3:
        var resultado = primeiroValor + segundoValor
        document.write(`<h2> ${primeiroValor} + ${segundoValor} = ${resultado} </h2>`)
        break
    case 4:
        var resultado = primeiroValor - segundoValor
        document.write(`<h2> ${primeiroValor} - ${segundoValor} = ${resultado} </h2>`)
        break
    default:
        document.write("<h2>Opção inválida</2>")
}  
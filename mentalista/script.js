var nSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  
    var chute = parseInt(prompt("Digite um número entre 0 e 10, você tem apenas 3 tentativas"))
    if(nSecreto == chute) {
        alert("Acertou!")
        break
    }
    else if (chute > nSecreto) {
        alert("O número secreto é menor")
        tentativas = tentativas - 1
    }
    else if (chute < nSecreto) {
        alert("O número secreto é maior")
        tentativas = tentativas - 1
    } 
}

if (chute != nSecreto) {
    alert(`Suas tentativas acabaram! O número secreto era ${nSecreto}`)
}
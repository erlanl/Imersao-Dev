var nomeJogador1 = prompt("Qual o nome do primeiro jogador?")
var jogador1 = {
 personagem: "https://uploaddeimagens.com.br/images/003/190/640/original/20210411_010644.png",
  nome: nomeJogador1,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos:0
  }

var nomeJogador2 = prompt("Qual o nome do segundo jogador?")
var jogador2 = {
  personagem: "https://uploaddeimagens.com.br/images/003/190/636/full/pngkey.com-black-knight-png-2151721.png",
  nome: nomeJogador2,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos:0
  }

jogador1.pontos = calculaPontos(jogador1)
jogador2.pontos = calculaPontos(jogador2)

//console.log(rafa.pontos)
//console.log(paulo.pontos)

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
  }

var jogadores = [jogador1, jogador2]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for (var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + "<img src=" + jogadores[i].personagem + ">" + "</td>"
    html += "<td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    html += "<td><button onClick='adicionarNovoJogador()'>Novo Jogador</button></td></tr>"
    }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
  }

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
  
  }
 
function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  
  exibirJogadoresNaTela(jogadores)
 }

function adicionarNovoJogador(i){
  var novoJogador = prompt("Qual o nome do novo jogador?")
  
 
  var jogadorNovo = {
  personagem: "https://uploaddeimagens.com.br/images/003/190/892/full/20210411_010525.png?1618160254",
  nome: novoJogador,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos:0
  }
  
  var adicionar = jogadores.push(jogadorNovo)
  jogadorNovo.pontos = calculaPontos(jogadorNovo)
  
  console.log(jogadores[2])
  
  return exibirJogadoresNaTela(jogadores)
  }

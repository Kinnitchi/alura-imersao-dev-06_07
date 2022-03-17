const cartas = [{
  nome: 'Bulbassauro',
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6,
    inteligencia: 2
  }
}, {
  nome: 'Darth Vader',
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2,
    inteligencia: 8
  }
}, {
  nome: 'Shiryu De Dragão',
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 3,
    inteligencia: 7
  }
}, {
  nome: 'Gojo Satoru',
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 10,
    inteligencia: 4
  }
}]
console.log(cartas);

let cartaMaquina = 0;
let cartaPlayer = 0;

// Pegar um valor  aleatorio do array!
function sortearCarta() {
  let randomCard = parseInt(Math.random() * cartas.length);
  let randomCardPlayer = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[randomCard];

  while (randomCard == randomCardPlayer) {
    randomCardPlayer = parseInt(Math.random() * cartas.length);
  }
  cartaPlayer = cartas[randomCardPlayer];
  console.log(cartaPlayer);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  let opcao = document.getElementById('opcoes');

  let opcaoText = ''
  for (let atributo in cartaPlayer.atributos) {
    opcaoText += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo
  }
  opcao.innerHTML = opcaoText
}

function obtainValueAtributo() {
  let radioAtributo = document.querySelector('input[name="atributo"]:checked').value;

  if (radioAtributo != null) {
    return radioAtributo;
  } else {
    alert('Oi')

  }

}

function jogar() {
  let valueAtributo = obtainValueAtributo();
  let resultado = document.getElementById('resultado');

  let valorCartaPlayer = cartaPlayer.atributos[valueAtributo];
  let valorCartaMaquina = cartaMaquina.atributos[valueAtributo];

  if (valorCartaPlayer > valorCartaMaquina) {
    resultado.innerHTML = 'Voce Venceu!!! 🏆'
  } else if (valorCartaMaquina > valorCartaPlayer) {
    resultado.innerHTML = 'Voce Perdeu! 😞'
  } else {
    resultado.innerHTML = 'Empatou 🤝🏻'
  }
}
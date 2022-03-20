const cartas = [{
  nome: 'Bulbassauro',
  avatar: 'https://gartic.com.br/imgs/mural/jh/jhonfs/bulbassauro.png',
  atributos: {
    ataque: 7,
    defesa: 8
  }
}, {
  nome: 'Darth Vader',
  avatar: 'https://th.bing.com/th/id/R.20f9ef8b8f9ef744664579c1cbcffe2f?rik=oLGWWPrJ4qlEzw&pid=ImgRaw&r=0',
  atributos: {
    ataque: 9,
    defesa: 8
  }
}, {
  nome: 'Shiryu De Dragão',
  avatar: 'https://th.bing.com/th/id/R.131843d3a67d33e8b572ea8a3a0097d5?rik=kFJbFKCnk5IzKQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-P7XLw3wqN_c%2fUdOczGoX55I%2fAAAAAAAAIRA%2fSzT36o2BfYY%2fs948%2fshiruy_008.png&ehk=D%2fKDMpG3wFAwLKZ2cjXSX2krDsXhD%2f1pfsMqLYtNoec%3d&risl=&pid=ImgRaw&r=0',
  atributos: {
    ataque: 8,
    defesa: 8
  }
}, {
  nome: 'Gojo Satoru',
  avatar: 'https://th.bing.com/th/id/R.36e58297e29de5d16db10a8f407d4638?rik=rgE%2buKKybS08KQ&pid=ImgRaw&r=0',
  atributos: {
    ataque: 7,
    defesa: 6
  }
}, {
  nome: 'Naruto Uzumaki',
  avatar: 'https://wallpapersflix.com/wp-content/uploads/2020/08/Naruto-Uzumaki-Wallpapers.jpg',
  atributos: {
    ataque: 10,
    defesa: 6
  }
}, {
  nome: 'Sasuke Uchiha',
  avatar: 'https://th.bing.com/th/id/OIP.68ac6ovT0ZjjgoyWrDDSUQHaJ4?pid=ImgDet&rs=1',
  atributos: {
    ataque: 9,
    defesa: 5
  }
}, {
  nome: 'Itachi Uchiha',
  avatar: 'https://i.pinimg.com/736x/6d/5d/99/6d5d99daa328629d82b68c747ca577e1.jpg',
  atributos: {
    ataque: 7,
    defesa: 8
  }
}, {
  nome: 'Akame Ga Kill',
  avatar: 'https://th.bing.com/th/id/OIP.WQIKM3xQD4pDtRd9N-zU4wHaIb?pid=ImgDet&rs=1',
  atributos: {
    ataque: 8,
    defesa: 6
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

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  // exibirOpcoes();
  exibirCartaJogador();
}

function exibirCartaJogador() {
  let imgCartaPlayer = document.getElementById('carta-jogador');
  imgCartaPlayer.style.backgroundImage = `url(${cartaPlayer.avatar})`;
  console.log('CARTA IMG: ', imgCartaPlayer);

  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>";

  let opcaoText = ''
  for (let atributo in cartaPlayer.atributos) {
    opcaoText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " = " + cartaPlayer.atributos[atributo] + "<br>";
  }
  let nome = `<p class='carta-subtitle'>${cartaPlayer.nome}</p>`;

  imgCartaPlayer.innerHTML = moldura + nome + tagHTML + opcaoText + '</div>';

}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.avatar})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " = " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function reiniciar() {
  history.go(0);
}

function obtainValueAtributo() {
  let radioAtributo = document.querySelector('input[name="atributo"]:checked').value;

  return radioAtributo;
}

function jogar() {
  let valueAtributo = obtainValueAtributo();
  let divResultado = document.getElementById('resultado');

  let valorCartaPlayer = cartaPlayer.atributos[valueAtributo];
  let valorCartaMaquina = cartaMaquina.atributos[valueAtributo];

  if (valorCartaPlayer > valorCartaMaquina) {
    resultado = '<p class="resultado-final">Voce Venceu!!! 🏆</p>'
  } else if (valorCartaMaquina > valorCartaPlayer) {
    resultado = '<p class="resultado-final">Voce Perdeu! 😞</p>'
  } else {
    resultado = '<p class="resultado-final">Empatou 🤝🏻</p>'
  }
  divResultado.innerHTML = resultado

  document.getElementById('btnJogar').disable = true;
  exibirCartaMaquina();
}
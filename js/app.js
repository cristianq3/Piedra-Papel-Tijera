let btnPiedra = document.getElementById("Piedra");
let btnPapel = document.getElementById("Papel");
let btnTijera = document.getElementById("Tijera");

let section = document.getElementsByTagName("section");

function random() {
  let nroRandom = Math.floor(Math.random() * 3 + 1);

  return nroRandom;
}

function jugarPiedra() {
  let movimientoMaquina = random();

  switch (movimientoMaquina) {
    case 1:
      alert("PIEDRA!, EMPATE!");

      break;
    case 2:
      alert("PAPEL!, PERDISTE!");

      break;
    case 3:
      alert("TIJERAS!, FELICITACIONES GANASTE!");

      break;

    default:
      break;
  }
}

function jugarPapel() {
  let movimientoMaquina = random();

  switch (movimientoMaquina) {
    case 1:
      alert("PIEDRA, GANASTE");

      break;
    case 2:
      alert("PAPEL!, EMPATE!");

      break;
    case 3:
      alert("TIJERAS!, PERDISTE!");

      break;

    default:
      break;
  }
}
function jugarTijera() {
  let movimientoMaquina = random();

  switch (movimientoMaquina) {
    case 1:
      alert("PIEDRA!, PERDISTE!");

      break;
    case 2:
      alert("PAPEL!, GANASTE!");

      break;
    case 3:
      alert("TIJERAS, EMPATE!");

      break;

    default:
      break;
  }
}
btnPiedra.addEventListener("click", jugarPiedra);
btnPapel.addEventListener("click", jugarPapel);
btnTijera.addEventListener("click", jugarTijera);

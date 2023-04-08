let btnPiedra = document.getElementById("Piedra");
let btnPapel = document.getElementById("Papel");
let btnTijera = document.getElementById("Tijera");

function random() {
  let nroRandom = Math.floor(Math.random() * 3 + 1);

  return nroRandom;
}

function jugarPiedra() {
  let movimientoMaquina = random();

  switch (movimientoMaquina) {
    case 1:
      alert("EMPATE");

      break;
    case 2:
      alert("PERDISTE");

      break;
    case 3:
      alert("GANASTE");

      break;

    default:
      break;
  }
}

function jugarPapel() {
  let movimientoMaquina = random();

  switch (movimientoMaquina) {
    case 1:
      alert("GANASTE");

      break;
    case 2:
      alert("EMPATE");

      break;
    case 3:
      alert("PERDISTE");

      break;

    default:
      break;
  }
}
function jugarTijera() {
  let movimientoMaquina = random();

  switch (movimientoMaquina) {
    case 1:
      alert("PERDISTE");

      break;
    case 2:
      alert("GANASTE");

      break;
    case 3:
      alert("EMPATE");

      break;

    default:
      break;
  }
}
btnPiedra.addEventListener("click", jugarPiedra);
btnPapel.addEventListener("click", jugarPapel);
btnTijera.addEventListener("click", jugarTijera);

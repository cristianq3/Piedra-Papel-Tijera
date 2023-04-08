let btnPiedra = document.querySelector("#btnPiedra");
let btnPapel = document.querySelector("#btnPapel");
let btnTijera = document.querySelector("#btnTijera");

btnPiedra.addEventListener("click", juegaPiedra);

btnPapel.addEventListener("click", juegaPiedra);

btnTijera.addEventListener("click", juegaPiedra);

function movimientoRandom() {
  return Math.floor(Math.random() * 3 + 1);
}

function juegaPiedra() {
  let movimientoComputadora = movimientoRandom();
  console.log(movimientoComputadora);

  switch (movimientoComputadora) {
    case 1:
      console.log("EMPATE");
      break;
    case 2:
      console.log("PERDIO");
      break;
    case 3:
      console.log("GANO");
      break;
    default:
      break;
  }
}

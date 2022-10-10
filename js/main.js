// document.write("hola")
// document.write("<h1>Hola</h1>")
/* 
let caja1 = document.getElementById("1");
let caja2 = document.getElementById("2");
let caja3 = document.getElementById("3"); */

// console.log(caja1, caja2, caja3);

/* caja1.addEventListener("click", () => {
    console.log("me has pulsado 1")
});
caja2.addEventListener("click", () => {
    console.log("me has pulsado 2")
});
caja3.addEventListener("click", () => {
    console.log("me has pulsado 3")
}); */

// término PROPAGACIÓN DE EVENTOS

// REFACTORIZAR EL addEventListener()



/* const marcarCasilla = (posicion) => {
    switch(posicion) {
        case '1' :
            caja1.innerHTML = "X"
        break;

        case '2' :
            caja2.innerHTML = "O"
        break;

        case '3' :
            caja3.innerHTML = "X"
        break;

        default:
            console.log("sin coincidencias")
        break;
    }
}
 */


/* const marcarCasilla = (posicion) => {
    switch(posicion) {
        case '1' :
            if(!interruptor){
                caja1.innerHTML = "X"
            }else {
                caja1.innerHTML = "O"
            }
        break;

        case '2' :
            caja2.innerHTML = "O"
        break;

        case '3' :
            caja3.innerHTML = "X"
        break;

        default:
            console.log("sin coincidencias")
        break;
    }
} */

// let interruptor = true;

/* const marcarCasilla = (posicion) => {
    switch(posicion) {
        case '1' :
            if(caja1.innerHTML == ""){
                caja1.innerHTML = (interruptor ? "X" : "O" );
                interruptor = !interruptor;
            }
        break;

        case '2' :
            if(caja2.innerHTML == ""){
                caja2.innerHTML = (interruptor ? "X" : "O" );
                interruptor = !interruptor;
            }
        break;

        case '3' :
            if(caja3.innerHTML == ""){
                caja3.innerHTML = (interruptor ? "X" : "O" );
                interruptor = !interruptor;
            }
        break;

        default:
            console.log("sin coincidencias")
        break;
    }
}
 */

/* let interruptor = true;

const marcarCasilla = (posicion) => {
    switch(posicion) {
        case '1' :
            if(caja1.innerHTML == ""){
                caja1.innerHTML = (interruptor ? "X" : "O" );
            }
        break;

        case '2' :
            if(caja2.innerHTML == ""){
                caja2.innerHTML = (interruptor ? "X" : "O" );
            }
        break;

        case '3' :
            if(caja3.innerHTML == ""){
                caja3.innerHTML = (interruptor ? "X" : "O" );
            }
        break;

        default:
            console.log("sin coincidencias")
        break;
    }
    interruptor = !interruptor;
    // con el interruptor fuera, se rompe el turno
} */

let interruptor = true;


let casillas = document.getElementsByClassName("rectangulo");
casillas = [...casillas]

casillas.map((casilla, index) => {
    casilla.addEventListener("click", () => {
        if(casilla.innerHTML == ""){
            casilla.innerHTML = (interruptor) ? "X" : "O";
            interruptor = !interruptor;
        }
    })
});

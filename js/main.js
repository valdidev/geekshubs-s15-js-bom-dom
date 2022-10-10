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

/* 
// versión más factorizada

let interruptor = true;

let casillas = document.getElementsByClassName("rectangulo");
casillas = [...casillas]

casillas.map((casilla) => {
    casilla.addEventListener("click", () => {
        if(casilla.innerHTML == ""){
            casilla.innerHTML = (interruptor) ? "X" : "O";
            interruptor = !interruptor;
        }
        // función a parte comprobar ganador a cada tirada
    })
}); 
*/

/* CREATE DOM ELEMENTS */
/* let texto = document.createTextNode("texto");
let cajon = document.createElement("div");

cajon.appendChild(texto);

document.body.appendChild(cajon)
 */

///////////////////////

/* let cajita = document.getElementById("cajita");

cajita.onclick = () => {
    cajita.classList.add("warning")
}
 */

/////////////////////

// JSON + STORAGE

/* let salva = {
    hobbie1: "luchar",
    hobbie2: "ducha",
    hobbie3: "futbolin"
}

let convertido = JSON.stringify(salva);
console.log(salva)
console.log(convertido)

localStorage.setItem('salva', convertido)

let sacados = JSON.parse(localStorage.getItem('salva'))

console.log(sacados) */

///////////////////////

// sessionStorage vs localStorage
/* 
    sessionStorage afecta solo a la pestaña
    localStorage todo el navegador


*/

// sessionStorage.setItem("salva",JSON.stringify(salva));

/////////////////////////////

/* const inputHandler = (e) => {
    console.log(e.target.value)
}
 */

let mensaje = document.getElementById("mensaje");


const inputHandler = (e) => {
    mensaje.innerHTML = e.target.value;
}




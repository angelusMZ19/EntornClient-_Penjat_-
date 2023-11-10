//realizar un String inmutable para la concateacion de las letras al formar las palabras
//usar match para remplazar 
//de aqui funciona para abajo 
//////////////////////////////////////////////////////////////////////////////////////////
/*
function mostrarMenu() {
    console.log("Benvingut al programa:");
    console.log("1. Iniciar un joc");
    console.log("2. Estadístiques");
    console.log("3. Sortir");
    let opcio = prompt("Selecciona una opció (1/2/3): ");
    
    if (opcio === '1') {
        iniciarJoc();
    } else if(opcio === '2') {
        mostrarEstadisticas();
    } else if(opcio === '3') {
        sortir();
    } else {
        console.log("Opció no vàlida. Si us plau, selecciona una opció correcta.");
    }
}

function iniciarJoc() {
    console.log("Has seleccionat iniciar un joc.");
    let palabra = prompt("Ingrese una palabra"); // Ingresa la palabra
    console.log(("_".repeat(palabra.length)).split(""));

    // Ingresa letra que cree que tiene la palabra
    let letra = prompt("Ingresa una letra");
    if (letra.length == 1) {
        let ascii = letra.charCodeAt(0);
        if ((ascii >= 65 && ascii <= 91)||(ascii >= 97 && ascii <= 122)) {
            let word = String.fromCharCode(ascii);
            console.log("El caracter ingresado " + word + " es una letra.");
        } else {
            console.log("El caracter ingresado no es una letra.");
        }
    } else {
        alert("Ingresa una sola letra");
    }
    remplazaLetra(letra, palabra);
}
function remplazaLetra(letra, palabra){
    if(palabra.includes(letra)){
        console.log("si incluye");
        let nueva="";
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === '_') {
              nueva= palabra[i] = letra;
            }
          }
        console.log(nueva);
          
    }else{
        console.log("no incluye");
    }

}
function mostrarEstadisticas() {
    console.log("Has seleccionat ver les estadístiques.");
    // Aquí poner el código para mostrar las estadísticas
    console.log("Cantidad de partidas jugadas");
    console.log("Cantidad de partidas ganadas %.");
    console.log("Cantidad de partidas perdidas %.");
}

function sortir() {
    console.log("Fins aviat!");
}
*/
/*
function inicializarPalabraOculta(palabra) {
    return Array(palabra.length).fill('_');
}

function mostrarPalabraOculta(palabraOculta) {
    console.log(palabraOculta.join(" "));
}

function jugar() {
    function adivinarLetra(palabra, palabraOculta, intentos, letrasIntentadas) {
        while (intentos > 0 && palabraOculta.includes('_')) {
            mostrarPalabraOculta(palabraOculta);
            var letra = prompt("Ingresa una letra:").toLowerCase();

            if (!letra.match(/[a-z]/) || letra.length !== 1) {
                console.log("Ingresa una letra válida.");
                continue;
            }

            if (letrasIntentadas.has(letra)) {
                console.log("Ya has intentado esa letra. Intenta con otra.");
                continue;
            }

            letrasIntentadas.add(letra);

            if (palabra.includes(letra)) {
                console.log("¡Bien! La letra está en la palabra.");
                for (var i = 0; i < palabra.length; i++) {
                    if (palabra[i] === letra) {
                        palabraOculta[i] = letra;
                    }
                }
            } else {
                console.log("Incorrecto. La letra no está en la palabra.");
                intentos--;
            }
        }

        if (!palabraOculta.includes('_')) {
            console.log("¡Felicidades! Has adivinado la palabra: " + palabra);
        } else {
            console.log("Perdiste. La palabra era: " + palabra);
        }
    }

    var palabra = prompt("Ingresa la palabra a adivinar:").toLowerCase();
    var palabraOculta = inicializarPalabraOculta(palabra);
    var intentos = 6;
    var letrasIntentadas = new Set();

    adivinarLetra(palabra, palabraOculta, intentos, letrasIntentadas);
}


/*__________________________________________________________________________________________________________________________________ */

function mostrarMenu(jugadas, ganadas, perdidas) {
    console.log("Benvingut al programa:");
    console.log("1. Iniciar un joc");
    console.log("2. Estadístiques");
    console.log("3. Sortir");
    let opcio = prompt("Selecciona una opció (1/2/3): ");
    
    if (opcio === '1') {
        // Llamada a la función iniciarJoc y asignación de los resultados devueltos a las variables
        const resultados = iniciarJoc(jugadas, ganadas, perdidas);
        jugadas = resultados.jugadas;
        ganadas = resultados.ganadas;
        perdidas = resultados.perdidas;
    } else if(opcio === '2') {
        mostrarEstadisticas(jugadas, ganadas, perdidas);
    } else if(opcio === '3') {
        sortir();
    } else {
        console.log("Opció no vàlida. Si us plau, selecciona una opció correcta.");
    }
}

/*__________________________________________________________________________________________________________________________________ */

function iniciarJoc(jugadas, ganadas, perdidas) {
    console.log("Has seleccionat iniciar un joc.");
    let palabra = prompt("Ingrese una palabra"); // Ingresa la palabra
    let palabraOculta = "_".repeat(palabra.length).split("");
    let letrasUtilizadas = "";
    let intentos = 6;
    
    while (palabraOculta.includes('_') && intentos > 0) {
        mostrarPalabraOculta(palabraOculta);
        mostrarLetrasUtilizadas(letrasUtilizadas);
        
        let letra = prompt("Ingresa una letra");
        
        if (esLetra(letra)) {
            if (letrasUtilizadas.includes(letra)) {
                console.log("Ya has intentado esa letra. Intenta con otra.");
                continue;
            }
            if (!palabra.includes(letra)) {
                intentos--;
            }
            letrasUtilizadas += letra;
            remplazarLetra(letra, palabra, palabraOculta);
        } else {
            console.log("Por favor, ingresa una letra válida.");
        }
        console.log("Intentos restantes:" + intentos);
    }
    if (!palabraOculta.includes('_')) {
        console.log("¡Felicidades! Has adivinado la palabra: " + palabra);
        ganadas++;
    } else {
        console.log("¡Oh no! Se acabaron los intentos. La palabra era: " + palabra);
        perdidas++;
    }
    jugadas++;
    
    // Devolución de los resultados como un objeto
    return { jugadas, ganadas, perdidas };
}

/*__________________________________________________________________________________________________________________________________ */


function mostrarPalabraOculta(palabraOculta) {
    console.log(palabraOculta.join(" "));
}

/*__________________________________________________________________________________________________________________________________ */

function mostrarLetrasUtilizadas(letrasUtilizadas) {
    console.log("Letras utilizadas: " + letrasUtilizadas.split("").join(", "));//separa las letras utilizadas por un ", "
}
/*__________________________________________________________________________________________________________________________________ */


function esLetra(caracter) {
    let codigoAscii = caracter.charCodeAt(0);
    return (codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122);//verififca que las letras sean letras
}

/*__________________________________________________________________________________________________________________________________ */

function remplazarLetra(letra, palabra, palabraOculta) {
    if (palabra.includes(letra)) {
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra) {
                palabraOculta[i] = letra;
            }
        }
        console.log("¡Bien! La letra está en la palabra.");
    } else {
        console.log("Incorrecto. La letra no está en la palabra.");
        
    }
}

/*__________________________________________________________________________________________________________________________________ */

function mostrarEstadisticas(jugadas, ganadas, perdidas) {
    console.log("Has seleccionat ver les estadístiques.");
    console.log("Partidas jugadas: " + jparseInt(jugadas));
    console.log("Partidas ganadas: " + ganadas);
    console.log("Partidas perdidas: " + perdidas);
    console.log("Porcentaje de partidas ganadas: " + calcularPorcentaje(ganadas, jugadas) + "%");
    console.log("Porcentaje de partidas perdidas: " + calcularPorcentaje(perdidas, jugadas) + "%");
}
/*__________________________________________________________________________________________________________________________________ */


function calcularPorcentaje(ganadas,jugadas) {
    if (jugadas > 0) {
        return (ganadas / jugadas * 100).toFixed(2);
    } else if (ganadas === 0) {
        return "0.00";
    } else {
        return "N/A";
    }
}

/*__________________________________________________________________________________________________________________________________ */
function sortir() {
    console.log("Fins aviat!");
}


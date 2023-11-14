let ganadas=0;
let perdidas=0;
let jugadas=0;

function mostrarMenu() {
    console.log("Benvingut al programa:");
    console.log("1. Iniciar un joc");
    console.log("2. Estadístiques");
    console.log("3. Sortir");
    let opcio = prompt("Selecciona una opció (1/2/3): ");
    
    if (opcio === '1') {
        // Llamada a la función iniciarJoc y asignación de los resultados devueltos a las variables
        iniciarJoc();
    } else if(opcio === '2') {
        mostrarEstadisticas();
    } else if(opcio === '3') {
        sortir();
    } else {
        console.log("Opció no vàlida. Si us plau, selecciona una opció correcta.");
    }
}

/*__________________________________________________________________________________________________________________________________ */

function iniciarJoc() {
    console.log("Has seleccionat iniciar un joc.");
    let palabra = prompt("Ingrese una palabra"); // Ingresa la palabra

    let palabraOculta;
    if(!esPalabra(palabra)){
        console.log("porfavor ingrese una palabra valida");
        palabra = prompt("Ingrese una palabra");
    }else{
            console.log("que empice el juego");
            palabraOculta = "_".repeat(palabra.length).split("");
        let letrasUtilizadas = "";
        let intentos = 6;
    
            while (palabraOculta.includes('_') && intentos > 0) {

                jugadas++;

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
}

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
    let codigoAscii;
    if(caracter.length==1){
        codigoAscii = caracter.charCodeAt(0);
    }
    return (codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122);//verififca que las letras sean letras
}
/*__________________________________________________________________________________________________________________________________ */
function esPalabra(palabra) {
    let codigoAscii;
    for(let i=0; i<palabra.length; i++){
        codigoAscii= palabra.charCodeAt(i);
    }
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

function mostrarEstadisticas() {
    console.log("Has seleccionat ver les estadístiques.");
    console.log("Partidas jugadas: " + jugadas);
    console.log("Partidas ganadas: " + ganadas);
    console.log("Partidas perdidas: " + perdidas);
    console.log("Porcentaje de partidas ganadas: " + calcularPorcentaje(ganadas, jugadas) + "%");
    console.log("Porcentaje de partidas perdidas: " + calcularPorcentaje(perdidas, jugadas) + "%");
}
/*__________________________________________________________________________________________________________________________________ */

function calcularPorcentaje(valor, total) {
    if (total > 0) {
        return ((valor / total) * 100).toFixed(2);
    } else if (valor === 0) {
        return "0.00";
    } else {
        return "N/A";
    }
}

/*__________________________________________________________________________________________________________________________________ */
function sortir() {
    console.log("Fins aviat!");
}


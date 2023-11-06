/*function mostrarMenu() {
    console.log("Benvingut al programa:");
    console.log("1. Iniciar un joc");
    console.log("2. Estadístiques");
    console.log("3. Sortir");
    let opcio = prompt("Selecciona una opció (1/2/3): ");
    
        //mostrarMenu();    
        if (opcio === '1') {
            iniciarJoc();
        }else if(opcio === '2') {
            mostrarEstadisticas();
        }else if(opcio === '3') {
            sortir();
            //break;
        }else{
            console.log("Opció no vàlida. Si us plau, selecciona una opció correcta.");
        }
    
}

function iniciarJoc() {
    console.log("Has seleccionat iniciar un joc.");
    let palabra= prompt("Ingrese una palabra");//ingresa la palabra
   
    //recorrido de la palabra para imprimir los espacios
    for(let i=0; i< palabra.length; i++){
        document.write(" _ ");
    }
    
    //ingresa letra que cree que tiene la palabra
    let letra= prompt("ingrese una letra");
    if(letra.length==1){
    let ascii = letra.toUpperCase().charCodeAt(0);
        if(ascii > 64 && ascii < 91){
            let word= String.fromCharCode(ascii);
            console.log("El caracter ingresado " + word + " es una letra.");
        }else{
            console.log("El caracter ingresado no es una letra.");
        }

        for(let k=0; k>= palabra.length; k++){
            if(letra == palabra.charAt(k)){
                do {
                    let palabra = palabra.replace('_',letra);
                
                }while(palabra.indexOf('_') >= letra);
                
            }
        }

    }else{
        alert("ingresa una sola letra");
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




//realizar un String inmutable para la concateacion de las letras al formar las palabras
//usar match para remplazar 
*/

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

    // Recorrido de la palabra para imprimir los espacios
    // for (let i = 0; i < palabra.length; i++) {
    //     document.write(" _ ");
    // }
    let muestra= console.log("_ ".repeat(palabra.length));

    // Ingresa letra que cree que tiene la palabra
    let letra = prompt("Ingresa una letra");
    if (letra.length == 1) {
        let ascii = letra.toUpperCase().charCodeAt(0);
        if (ascii > 64 && ascii < 91) {
            let word = String.fromCharCode(ascii);
            console.log("El caracter ingresado " + word + " es una letra.");

            let nuevaPalabra="";
            for (let k = 0; k < palabra.length; k++) {
                if(letra == palabra.charAt(k)){
                    nuevaPalabra += letra;
                } else {
                  nuevaPalabra+= muestra[k];
                    
                }
            }
        } else {
            console.log("El caracter ingresado no es una letra.");
        }
    } else {
        alert("Ingresa una sola letra");
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

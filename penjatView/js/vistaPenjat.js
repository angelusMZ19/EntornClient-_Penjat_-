let ganadas=0;
let perdidas=0;
let jugadas=0;

/*____________________________________________________________________________*/

function iniciarJoc() {
    // alert("Has seleccionat iniciar un joc.");
    let palabra = prompt("Ingrese una palabra"); 
    let palabraOculta;
    if(!esPalabra(palabra)){
        alert("porfavor ingrese una palabra valida");
        palabra = prompt("Ingrese una palabra");
    }else{
            alert("que empice el juego");

            palabraOculta = encriptaPalabra(palabra);
            encriptaPalabra(palabra);
            crearBoton();
        let letrasUtilizadas = "";
        let intentos = 6;
        while (palabraOculta.includes('_') && intentos > 0) {

            jugadas++;

            mostrarPalabraOculta(palabraOculta);
            mostrarLetrasUtilizadas(letrasUtilizadas);
            
            //let letra = prompt("Ingresa una letra");
            console.log(clickLletra(abecedari));
            if (clickLletra(abecedari)) {
                if (letrasUtilizadas.includes(clickLletra(abecedari))) {
                    alert("Ya has intentado esa letra. Intenta con otra.");
                    continue;
                }
                if (!palabra.includes(clickLletra(abecedari))) {
                    intentos--;//esto es igual a sumar uno mas a la imagen
                }
                letrasUtilizadas += clickLletra(abecedari);
                remplazarLetra(clickLletra(abecedari), palabra, palabraOculta);
            } else {
                alert("Por favor, ingresa una letra válida.");
            }
            alert("Intentos restantes:" + intentos);
        }
        if (!palabraOculta.includes('_')) {
        alert("¡Felicidades! Has adivinado la palabra: " + palabra);
        ganadas++;
        } else {
        alert("¡Oh no! Se acabaron los intentos. La palabra era: " + palabra);
        perdidas++;
        }
    }
}
/*____________________________________________________________________________*/
function encriptaPalabra(palabra) {
    
    let palabraOculta= "<h1>" + "_ ".repeat(palabra.length)/*.split("")*/+ "</h1>";
    document.getElementById("muestraEncriptado").innerHTML= palabraOculta;
}
/*____________________________________________________________________________*/

function mostrarPalabraOculta(palabraOculta) {
    alert(palabraOculta.join(" "));
}
/*____________________________________________________________________________*/

function esPalabra(palabra) {
    let codigoAscii;
    for(let i=0; i<palabra.length; i++){
        codigoAscii= palabra.charCodeAt(i);
    }
    return (codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122);//verififca que las letras sean letras
}
/*____________________________________________________________________________*/

function crearBoton(){
    let abecedari= "abcdefghijklmnñopqrstuvwxyz";
    let abecedariHTML="";
    for(let i=0; i<abecedari.length; i++){
        abecedariHTML += '<button id="botonLetra" onclick="clickLletra(\'' + abecedari[i] + '\')">' + abecedari[i] + '</button>';
    }
    document.getElementById("abecedari").innerHTML = abecedariHTML; 
    //console.log(abecedariHTML);
}

function clickLetra(letra) {
    // Puedes realizar acciones adicionales al hacer clic en una letra si es necesario
    console.log("Letra clickeada: " + letra);
}

function esLetraValida(letra, abecedari) {
    return letra.length === 1 && abecedari.includes(letra.toLowerCase());
}

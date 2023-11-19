let ganadas=0;
let perdidas=0;
let jugadas=0;

/*____________________________________________________________________________*/

function novaPartida() {
    let palabra = prompt("Ingrese una palabra"); 
    jugadas++;
    //localStorage(setItem('partidas'+ jugadas))
    let palabraOculta;
    if(!esPalabra(palabra)){
        alert("porfavor ingrese una palabra valida");
        palabra = prompt("Ingrese una palabra");
    }else{
            alert("que empice el juego");
            palabraOculta=encriptaPalabra(palabra);
            crearBoton();
            
        let letrasUtilizadas = [];
        let intentos = 6;
        while (palabra.includes('_') || intentos > 0) {
            mostrarPalabraOculta(palabraOculta);
            LetrasUtilizadas(letrasUtilizadas);
            let letraClickeada = clickLletra(letra);

            if (letraClickeada && esLetraValida(letraClickeada)) {
                if (letrasUtilizadas.includes(letraClickeada)) {
                    alert("Ya has intentado esa letra. Intenta con otra.");
                    continue;
                }
                if (!palabra.includes(letraClickeada)) {
                    intentos--;
                    mostrarImagen(intentos);
                }
                letrasUtilizadas += letraClickeada;
                palabraOculta = remplazarLetra(letraClickeada, palabra, palabraOculta);
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

function mostrarEstadisticas() {
    document.write("Has seleccionado ver las estadísticas." + "<br>");
    document.write("Partidas jugadas: " + jugadas + "<br>");
    document.write("Partidas ganadas: " + ganadas + "<br>");
    document.write("Partidas perdidas: " + perdidas + "<br>");
    document.write("Porcentaje de partidas ganadas: " + calcularPorcentaje(ganadas, jugadas) + "%" + "<br>");
    document.write("Porcentaje de partidas perdidas: " + calcularPorcentaje(perdidas, jugadas) + "%");
 }
 

function calcularPorcentaje(valor, total) {
    if (total > 0) {
        return ((valor / total) * 100).toFixed(2);
    } else if (valor === 0) {
        return "0.00";
    } else {
        return "N/A";
    }
}

function encriptaPalabra(palabra) {
    
    let palabraOculta= "<h1>" + "_".repeat(palabra.length).split("")+ "</h1>";
    document.getElementById("jocPenjat").innerHTML= palabraOculta;
}



function esPalabra(palabra) {
    let codigoAscii;
    for(let i=0; i<palabra.length; i++){
        codigoAscii= palabra.charCodeAt(i);
    }
    return (codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122);//verififca que las letras sean letras
}


function crearBoton(){
    let abecedari= "abcdefghijklmnñopqrstuvwxyz";
    let abecedariHTML="";
    for(let i=0; i<abecedari.length; i++){
        abecedariHTML += '<button id="botonLetra" onclick="clickLletra(\'' + abecedari[i] + '\')">' + abecedari[i] + '</button>';
    }
    document.getElementById("abecedari").innerHTML = abecedariHTML;
    console.log(abecedariHTML);
    return abecedariHTML; 
   
}

function clickLletra(letra) {
    //console.log("Letra clickeada: " + letra);
    return letra;
}


function esLetraValida(letra) {
    let abecedari = "abcdefghijklmnñopqrstuvwxyz";
    return letra.length === 1 && abecedari.includes(letra.toLowerCase());
}
    

function LetrasUtilizadas(letrasUtilizadas) {
    let letrasUtilizadasElement = document.getElementById("lletresUtilitzades");
    letrasUtilizadasElement.innerHTML = "Letras utilizadas: " + letrasUtilizadas.split("").join(", ");
}

 function mostrarPalabraOculta(palabraOculta) {
     let palabraOcultaElement = document.getElementById("jocPenjat");
     repalabraOculta= palabraOculta.join("");
    palabraOcultaElement.innerHTML = "<h1>" + repalabraOculta + "</h1>";
}

function remplazarLetra(letra, palabra, palabraOculta) {
    let nuevaPalabraOculta = "";
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            nuevaPalabraOculta += letra;
        } else {
            nuevaPalabraOculta += palabraOculta[i];
        }
    }
    return nuevaPalabraOculta;
}

function mostrarImagen(intentos) {
    let imagenPenjatElement = document.getElementById("imatgePenjat").innerHTML;
    let rutaImagenes = "img/";
    let imagenActual = "penjat_" + (6 - intentos) + ".png";
    imagenPenjatElement.src = rutaImagenes + imagenActual;
    imagenPenjatElement.alt = "Imatge de'l penjat";  
}

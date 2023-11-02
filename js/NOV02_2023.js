function menu(){
    console.log("1_Iniciar un joc " + 
        " 2_Estadístiques" + 
        " 3_Sortir ")
}

//ejecucion del penjat
function escribe(){
    let palabra= prompt("Ingrese una palabra");//ingresa la palabra
   
    //recorrido de la palabra para imprimir los espacios
    for(let i=0; i< palabra.length; i++){
        document.write(" _ ");
    }
    //////////////////////////////////////////////////
    //ingresa letra que cree que tiene la palabra
    let letra= prompt("ingrese una letra");
    if(letra.length==1){
    let ascii = letra.toUpperCase().charCodeAt(0);
        if(ascii > 64 && ascii < 91){
            console.log("El caracter ingresado" + ascii + " es una letra.");
            
        }else{
            console.log("El caracter ingresado no es una letra.");
        }
    }
}


//realizar un String inmutable para la concateacion de las letras al formar las palabras

// ----hacemos la vinculacion con cada boton---
    const resultado = document.getElementById("resultado");
    const siete = document.getElementById("7");
    const ocho = document.getElementById("8")
    const nueve = document.getElementById("9")
    const division = document.getElementById("division")
    const cuatro = document.getElementById("4")
    const cinco = document.getElementById("5")
    const seis = document.getElementById("6")
    const multiplicacion = document.getElementById("multiplicacion")
    const uno = document.getElementById("1")
    const dos = document.getElementById("2")
    const tres = document.getElementById("3")
    const resta = document.getElementById("menos")
    const cero = document.getElementById("0")
    const punto = document.getElementById("punto")
    const reset = document.getElementById("reset")
    const suma = document.getElementById("mas")
    const igual = document.getElementById("igual")

    // ----Agregamos funciones a los botones para mostrar en pantalla---
    uno.onclick = () => resultado.textContent = resultado.textContent + "1"
    dos.onclick = () => resultado.textContent = resultado.textContent + "2"
    tres.onclick = () => resultado.textContent = resultado.textContent + "3"
    cuatro.onclick = () => resultado.textContent = resultado.textContent + "4"
    cinco.onclick = () => resultado.textContent = resultado.textContent + "5"
    seis.onclick = () => resultado.textContent = resultado.textContent + "6"
    siete.onclick = () => resultado.textContent = resultado.textContent + "7"
    ocho.onclick = () => resultado.textContent = resultado.textContent + "8"
    nueve.onclick = () => resultado.textContent = resultado.textContent + "9"
    cero.onclick = () => resultado.textContent = resultado.textContent + "0"
    punto.onclick = () => resultado.textContent = resultado.textContent + "."
    reset.onclick = () => resetear()

    let operandoA; 
    let operandoB; 
    let operacion;
// --- operaciones matematicas ---
    division.onclick = () => {
        resultado.textContent == "" 
            ? alert("debes ingresar primero un numero") 
            : operandoA = resultado.textContent;
              operacion = "/" ;
                limpiar()
            
        
    }
    multiplicacion.onclick = () => {
        resultado.textContent == "" 
            ? alert("debes ingresar primero un numero") 
            : operandoA = resultado.textContent;
              operacion = "x" ;
              limpiar()
    }
    resta.onclick = () => {
        resultado.textContent == "" 
        ? alert("debes ingresar primero un numero") 
        : operandoA = resultado.textContent;
          operacion = "-" ;
          limpiar()
    }
    suma.onclick = () => {
        resultado.textContent == "" 
        ? alert("debes ingresar primero un numero") 
        : operandoA = resultado.textContent;
          operacion = "+" ;
          limpiar()
    }
    igual.onclick = () => {
        resultado.textContent == "" 
        ? alert("debes ingresar un numero") 
        : operandoB = resultado.textContent;
            if(operacion == "/" && operandoB == 0 ){
                alert('no es posible dividir por 0')
                limpiar()
                return
            }
          resolver()

        
    }
    function limpiar(){
        resultado.textContent = ""
        // console.log("limpio")
    }

    function resetear(){
        resultado.textContent= "";
        operacion= "";
        operandoA="";
        operandoB="";
        // console.log("reseteo")
    }

    function resolver(){

      
        let resultadoOperacion;
        // console.log({operacion})
        switch(operacion){
            case "+":
                resultadoOperacion  = parseFloat (operandoA) + parseFloat(operandoB);
                console.log("sumando")
                break;
            case "-":
                resultadoOperacion   = parseFloat (operandoA)-parseFloat(operandoB );
                break;
            case "/":
                resultadoOperacion   = parseFloat (operandoA)/parseFloat(operandoB );
                break;
            case "x":
                resultadoOperacion   = parseFloat (operandoA)*parseFloat(operandoB );
                break;
            default:
                break;
        }
       
        resetear()
        resultado.textContent = resultadoOperacion
        console.log(resultado.textContent)
    }
//-------------------------------------------------------------------------------------------
//  Variables generales
//-------------------------------------------------------------------------------------------

var palabraOriginal 
//palabra original que se ha introducido a adivinar

var contador = 0 
//contador de fallos

var letrasusadas = [] 
//para guardar las letras que se han usado, para no poder sumar fallos accidentales

var a = "a"
var b = "b"
var c = "c"
var d = "d"
var e = "e"
var f = "f"
var g = "g"
var h = "h"
var i = "i"
var j = "j"
var k = "k"
var l = "l"
var m = "m"
var n = "n"
var o = "o"
var p = "p"
var q = "q"
var r = "r"
var s = "s"
var t = "t"
var u = "u"
var v = "v"
var w = "w"
var x = "x"
var y = "y"
var z = "z"

//-------------------------------------------------------------------------------------------
//  para leer la tecla que el usuario ha presionado y ver si esta en la palabra
//-------------------------------------------------------------------------------------------

function leerTeclado(e){
    let evento = e || window.event
    let caracter = evento.charCode || evento.keyCode
    console.log(caracter)
    let casi = String.fromCharCode(caracter)
    let final = casi.toLowerCase()
    if ((97 <= caracter && caracter <= 122) || (65 <= caracter && caracter <= 90)){
        adivinarLetra(final)
    }
}

//-------------------------------------------------------------------------------------------
//  Funciones generales
//-------------------------------------------------------------------------------------------

function GuardarPalabra(){
    palabraOriginal = document.getElementById("cogePalabra").value
    palabra = palabraOriginal.toLowerCase()
    document.addEventListener("keypress", leerTeclado)
}

function adivinarLetra(letra){
    if(!letrasusadas.includes(letra)){
        if(palabra.includes(letra)){
            document.getElementById(letra).style.backgroundColor = "greenyellow"
            letrasusadas.push(letra)
        } else {
            if(contador == 0){
                contador++
                document.getElementById("pierna_izq").style.backgroundColor = 'transparent'
            } else if (contador == 1){
                contador++
                document.getElementById("pierna_der").style.backgroundColor = 'transparent'
            } else if (contador == 2){
                contador++
                document.getElementById("brazo_izq").style.backgroundColor = 'transparent'
            } else if (contador == 3){
                contador++
                document.getElementById("brazo_der").style.backgroundColor = 'transparent'
            } else if (contador == 4){
                contador++
                document.getElementById("torso").style.backgroundColor = 'transparent'
            } else if (contador == 5){
                contador++
                document.getElementById("cabeza").style.border = '0px solid black'
            }
            document.getElementById(letra).style.backgroundColor = "red"
            letrasusadas.push(letra)
        }
        return
    }
    // mensaje de "letra ya utilizada"
    document.getElementById("contadorActual").textContent = Number(contador) 
    return
}
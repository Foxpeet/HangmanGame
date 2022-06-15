var palabra
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

function GuardarPalabra(){
    palabra = document.getElementById("cogePalabra").value
}
function adivinarLetra(letra){
    if(palabra.includes(letra)){
        console.log("esta")
    } else {
        console.log("no esta")
    }
}
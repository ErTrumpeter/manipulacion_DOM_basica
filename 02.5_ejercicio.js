const suma = document.querySelector('#suma')
const resta = document.querySelector('#resta')
const multip = document.querySelector('#multip')
const division = document.querySelector('#division')
const valor1 = document.querySelector('#calculo1')
const valor2 = document.querySelector('#calculo2')
const btnCalc = document.querySelector('btnCalcular')
const respuesta = document.querySelector('#result')


function btnOnClick(){
    let val1 = Number(valor1.value)
    let val2 = Number(valor2.value)
    let result

    if(suma.checked){
        result = val1 + val2
    }
    else if(resta.checked){
        result = val1 - val2
    }
    else if(multip.checked){
        result = val1 * val2
    }
    else if(division.checked){
        result = val1 / val2
    }
    else {
        result = "No has escogido una operacion aun🙄 "
    }

    respuesta.innerHTML = "Repuesta: " + result 
}
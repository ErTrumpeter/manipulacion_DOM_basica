// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


function saludo(name, lastname, nickname){
    let completeName = name + " " + lastname
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
}



//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }


if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} 
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}




// //Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
//esto no sirvio
// let suscripcion = [
//     {tipo: "Free", log: "Solo puedes tomar los cursos gratis"},
//     {tipo: "Basic", log: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
//     {tipo: "Expert", log: "Puedes tomar casi todos los cursos de Platzi durante un año"},
//     {tipo: "ExpertPlus", log: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
// ]

let tipoSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"]


let infoSuscripcion = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]


let suscriptor = prompt("Escriba tipo de suscripcion: ")


for (let i=0; i < tipoSuscripcion.length; i++) {
    if (suscriptor == tipoSuscripcion[i]) {
        console.log(`Estas suscrito al plan ${tipoSuscripcion[i]} en el cual ${infoSuscripcion[i]}`)
    }
  }

//Ejercicio de JuanDC
let tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" 
}


function conseguirTipoSuscripcion(suscripcion) {
    if(tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion])
        return
    }

    console.warn('Ese tipo de suscripcion no existe');
}


let suscriptorTipo = prompt("Escriba tipo de suscripcion: ")

conseguirTipoSuscripcion(suscriptorTipo)




// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0
while(i < 5){
    console.log("El valor de i es: " + i);
    i++
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let a = 10
while(a >= 2){
    console.log("El valor de i es: " + a);
    a--
}




//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
//💡 Pista: puedes usar la función prompt de JavaScript.

while(true){
    let suma = prompt("Cuanto es 2 + 2? ")
    
    if(suma == 4){
        console.log('Felicidades eres un crack.')
        break
    }
    else {
        console.log('Responde bien berraco....')
    }
}

//respuesta de JuanDc
let respuesta

while (respuesta != 4) {
    let pregunta = prompt('Cuanto es 2 + 2?')
    respuesta = pregunta
}




//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
let names = ["Juan", "Pedro", "Jose"]

function primerElement(array){
    console.log(array[0])
}




//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
let names2 = ["Juan", "Pedro", "Jose", "Maria"]

function primerElement(array){
    for(let i=0; i < array.length; i++){
        console.log(`${i+1} ${array[i]}`)   //esto para mostrar el numero del elemento del array alante
    }
}



//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let persona = {
    name: "Juan",
    lastName: "Lopez",
    mail: "wherever@gmail.com"
} 


function mostrarTodo(object){
    for(let key in object){
        console.log(object[key])
    }
}


//Solucion de JuanDC
function mostrarObjetoUnoAuno(obj){
    const array = Object.values(obj)
    for(let i=0; i < array.length; i++){
        console.log(array[i])
    }
}
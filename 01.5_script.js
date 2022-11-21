const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const pClass = document.querySelector('pClass')
const pId = document.querySelector('pId')
const input = document.querySelector('input')

console.log({
    h1,
    p,
    pClass,
    pId,
    input
})


h1.innerHTML = "Patito <br> Feo"    //permite añadir texto y lo interpreta como HTML
h1.innerText = "Patito <br> Feo"    //permite añadir texto pero no lo interpreta como HTML

h1.getAttribute('class')     //permite traer solamente el valor del atributo especificado
h1.setAttribute('class', 'rojo')  //permite cambiar el valor al atributo especificado


h1.classList.add('rojo')     //permite añadir una nueva clase
h1.classList.remove('rojo')   //eliminar una clase
//h1.classList.toogle('rojo')
//h1.classList.contains('rojo')

input.value = "234"    //cambiar el valor del input


//crear imagen desde Js dentro de una etiqueta HTML
const img = document.createElement('img')
img.setAttribute('src', 'url_de_la_imagen')

pId.append(img)   //append agrega el contenido al HTML
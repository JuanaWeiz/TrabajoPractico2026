let parrafo1 = document.querySelector('#parrafo1')
let boton1 = document.querySelector('#boton1')
let edad = 98

boton1.onclick = function () {
    if (edad >= 18) {
        parrafo1.textContent = 'Sos mayor de edad'
    } else {
        parrafo1.textContent = 'Sos menor de edad'
    }
}

let parrafo2 = document.querySelector('#parrafo2')
let boton2 = document.querySelector('#boton2')
let nombreUsuario = 'Felipe'

boton2.onclick = function () {
    if( (nombreUsuario == 'Nahuel') || (nombreUsuario == 'Marcos')) {
        parrafo2.textContent = "Bienvenido " + nombreUsuario + " ¿cómo estás?"
    } else {
        parrafo2.textContent = 'Bienvenido '+ nombreUsuario
    }
}


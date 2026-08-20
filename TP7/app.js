let edad = 18
let ejercicio1 = document.querySelector('#parrafo1')
let ejecutar1 = document.querySelector("#boton1")

ejecutar1.onclick = function () {
    if (edad >= 18) {
        ejercicio1.textContent = " Podes ingresar "
    } else {
        ejercicio1.textContent = " No podes ingresar "
    }
}

let NombreUsuario = "Nahuel"
let ejercicio2 = document.querySelector("#parrafo2")
let ejecutar2 = document.querySelector("#boton2")

ejecutar2.onclick = function () {
    if (NombreUsuario == "Nahuel") {
        ejercicio2.textContent = "Bienvenido Nahuel"
    } else {
        ejercicio2.textContent = "Bienvenido Usuario"
    }
}
let ejercicio3 = document.querySelector("#parrafo3")
let ejecutar3 = document.querySelector("#boton3")

ejecutar3.onclick = function () {
    if ((NombreUsuario == "Nahuel") || (NombreUsuario == "Marcos")) {
        ejercicio3.textContent = " bienvenido " + NombreUsuario + " ¿Como estas?"
    } else {
        ejercicio3.textContent = "bienvenido usuario"
    }
}


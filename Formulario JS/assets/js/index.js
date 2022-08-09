//variables para registrar los datos
var comida = document.getElementById('comida')
var acompanamiento = document.getElementById('acompanamiento')
var bebida = document.getElementById('bebida')
var direccion = document.getElementById('direccion')
var nombre = document.getElementById('nombre')
var identificacion = document.getElementById('identificacion')
var celular = document.getElementById('celular')
var nota_orden = document.getElementById('nota_orden')
var nota_domicilio = document.getElementById('nota_domicilio')
//boton que enviará los datos del usuario
var btn_pedido = document.getElementById('btn_pedido')
//clases para manejar errores
var clase_comida = document.querySelector('.comida')
var clase_acompanamiento = document.querySelector('.acompanamiento')
var clase_bebida = document.querySelector('.bebida')
var Clase_direccion = document.querySelector('.direccion')
var Clase_nombre = document.querySelector('.nombre')
var Clase_identificacion = document.querySelector('.identificacion')
var clase_celular = document.querySelector('.celular')
//variables expresiones regulares
var regExpNumeroDocumento = /^[0-9]/
var regExpDireccion = /^[A-Za-z0-999]/
var regExpNombre = /^[a-zA-Z]/

//funcion error
function generarError(elemento, mensaje = '') {
    if (mensaje != '') {
        elemento.lastElementChild.innerHTML = `<span class="text-danger existe_error"> ${mensaje} </span>`
    } else {
        elemento.lastElementChild.innerHTML = mensaje
    }
}

//funcion pedido
function registrarpedido() {
    //ORDEN

    if (comida.value === '') {
        generarError(clase_comida, 'Selecciona una comida!')
    } else if (comida.value === '1' || comida.value === '2' || comida.value === '3') {
        generarError(clase_comida)
        console.log(comida.value)
    }
    if (acompanamiento.value === '') {
        generarError(clase_acompanamiento, 'Selecciona una acompañamiento!')
    } else if (acompanamiento.value === '1' || acompanamiento.value === '2' || acompanamiento.value === '3') {
        generarError(clase_acompanamiento)
        console.log(acompanamiento.value)
    }
    if (bebida.value === '') {
        generarError(clase_bebida, 'Selecciona una bebida!')
    } else if (bebida.value === '1' || bebida.value === '2' || bebida.value === '3') {
        generarError(clase_bebida)
        console.log(bebida.value)
    }

    //DOMICILIO
    if (regExpDireccion.test(direccion.value)) {
        generarError(Clase_direccion)
        console.log(direccion.value)
    } else {
        generarError(Clase_direccion, 'La dirección no puede estar vacía y debe cumplir el siguiente formato EJ: Calle 11 11A - 11')
    }
    if (regExpNombre.test(nombre.value)) {
        generarError(Clase_nombre)
        console.log(nombre.value)
    } else {
        generarError(Clase_nombre, 'El nombre no puede estar vacio y solo deben ser caracteres')
    }
    if (regExpNumeroDocumento.test(identificacion.value)) {
        generarError(Clase_identificacion)
        console.log(identificacion.value)
    } else {
        generarError(Clase_identificacion, 'El numero de documento debe ser un número y no debe estar vacío')
    }
    if (regExpNumeroDocumento.test(celular.value)) {
        generarError(clase_celular)
        console.log(celular.value)
    } else {
        generarError(clase_celular, 'El numero de celular o fijo debe ser un número y no debe estar vacío')
    }

    //guardar datos en localstorage
    var valida_formulario = !!document.querySelector(".existe_error")
    console.log(valida_formulario)
    if (valida_formulario == false) {
        localStorage.setItem("comida", comida.value)
        localStorage.setItem("acompañamiento", acompanamiento.value)
        localStorage.setItem("bebida", bebida.value)
        localStorage.setItem("dirección", direccion.value)
        localStorage.setItem("nombres", nombre.value)
        localStorage.setItem("identificacion", identificacion.value)
        localStorage.setItem("celular", celular.value)
        localStorage.setItem("nota_orden", nota_orden.value)
        localStorage.setItem("nota_domicilio", nota_domicilio.value)
    }
}
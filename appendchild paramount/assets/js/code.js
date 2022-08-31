let bodyPagina = document.querySelector("body")

let seccion1 = document.createElement("section")
seccion1.className = "fondo1"
bodyPagina.appendChild(seccion1)

let divGeneral = document.createElement("div")
divGeneral.className = "container"
seccion1.appendChild(divGeneral)

let navbar = document.createElement("nav")
navbar.className = "nav"
divGeneral.appendChild(navbar)

let logo = document.createElement("img")
logo.className = "logo"
logo.src = './assets/img/logo.svg'
navbar.appendChild(logo)

let titulo1 = document.createElement("h2")
titulo1.className = "titulo1 text-white pt-5"
titulo1.innerHTML = "HISTORIAS ÚNICAS.<br> ESTRELLAS ICÓNICAS. <br> UNA MONTAÑA DE <br>ENTRETENIMIENTO."
divGeneral.appendChild(titulo1)

let texto1 = document.createElement("h5")
texto1.className = "texto1 text-white"
texto1.innerHTML = "Suscríbete por $13,900.00 COP al Mes.<br>Cancela en cualquier momento.<br>Únete ahora y obtén 7 días gratis."
divGeneral.appendChild(texto1)

let divBotones = document.createElement("div")
divBotones.className = "div1 row g-4"
divGeneral.appendChild(divBotones)

var btn1 = document.createElement("button")
btn1.className = "btn1 btn btn-primary"
btn1.innerHTML = "SUSCRÍBETE A PARAMOUNT+"
divBotones.appendChild(btn1)

var btn2 = document.createElement("button")
btn2.className = "btn2 btn btn-outline-light"
btn2.innerHTML = "YA TENGO PARAMOUNT+"
divBotones.appendChild(btn2)

var btn3 = document.createElement("button")
btn3.className = "btn3 btn btn-outline-light"
btn3.innerHTML = "INICIA SESIÓN CON TU PROVEEDOR"
divBotones.appendChild(btn3)


//Seccion2

let seccion2 = document.createElement("section")
seccion2.className = "fondo2"
bodyPagina.appendChild(seccion2)

let divGeneral2 = document.createElement("div")
divGeneral2.className = "container"
seccion2.appendChild(divGeneral2)

let titulo2 = document.createElement("h2")
titulo2.className = "titulo2 text-white pt-5"
titulo2.innerHTML = "SOMOS<br>ORIGINALES Y<br>EXCLUSIVOS"
divGeneral2.appendChild(titulo2)

let texto2 = document.createElement("h5")
texto2.className = "texto2 text-white"
texto2.innerHTML = "Disfruta de historias únicas, estrellas icónicas y programas <br>exclusivos que no encontrarás en ningún otro lugar."
divGeneral2.appendChild(texto2)

let divCarrusel = document.createElement("div")
divCarrusel.className = "carousel1"
divGeneral2.appendChild(divCarrusel)

let divImagenesCarrusel = document.createElement("div")
divImagenesCarrusel.className = "d-flex"
divCarrusel.appendChild(divImagenesCarrusel)

var contadorCarrusel1 = 1

while (contadorCarrusel1 <= 8) {
    let imagenesCarrusel1 = document.createElement("img")
    imagenesCarrusel1.src = `./assets/img/carrusel1/${contadorCarrusel1}.jpg`
    imagenesCarrusel1.className = "w-100 pe-2"
    divImagenesCarrusel.appendChild(imagenesCarrusel1)
    contadorCarrusel1++
}

//SECCION3

let seccion3 = document.createElement("section")
seccion3.className = "fondo3"
bodyPagina.appendChild(seccion3)

let divGeneral3 = document.createElement("div")
divGeneral3.className = "container"
seccion3.appendChild(divGeneral3)

let titulo3 = document.createElement("h2")
titulo3.className = "titulo3 text-white pt-5"
titulo3.innerHTML = "TENEMOS TU<br>CONTENIDO<br>FAVORITO"
divGeneral3.appendChild(titulo3)

let texto3 = document.createElement("h5")
texto3.className = "texto3 text-white"
texto3.innerHTML = "Desde películas taquilleras y series reconocidas a tus<br>programas favoritos, en Paramount+ podrás disfrutarlo todo"
divGeneral3.appendChild(texto3)

let divCarrusel2 = document.createElement("div")
divCarrusel2.className = "carousel2"
divGeneral3.appendChild(divCarrusel2)

let divImagenesCarrusel2 = document.createElement("div")
divImagenesCarrusel2.className = "d-flex"
divCarrusel2.appendChild(divImagenesCarrusel2)

var contadorCarrusel1 = 1

while (contadorCarrusel1 <= 8) {
    let imagenesCarrusel1 = document.createElement("img")
    imagenesCarrusel1.src = `./assets/img/carrusel2/${contadorCarrusel1}.jpg`
    imagenesCarrusel1.className = "w-100 pe-2"
    divImagenesCarrusel2.appendChild(imagenesCarrusel1)
    contadorCarrusel1++
}

//SECCION 4

let seccion4 = document.createElement("section")
seccion4.className = "fondo4"
bodyPagina.appendChild(seccion4)

let divGeneral4 = document.createElement("div")
divGeneral4.className = "container d-flex flex-column align-items-center"
seccion4.appendChild(divGeneral4)

let titulo4 = document.createElement("h2")
titulo4.className = "titulo4 text-white pt-5"
titulo4.innerHTML = "CUANDO QUIERAS, DONDE QUIERAS"
divGeneral4.appendChild(titulo4)

let texto4 = document.createElement("h5")
texto4.className = "texto4 text-white"
texto4.innerHTML = "Suscríbete por $13,900.00 COP al Mes.Cancela en cualquier momento."
divGeneral4.appendChild(texto4)

let divBotones2 = document.createElement("div")
divBotones2.className = "div2 row g-4"
divGeneral4.appendChild(divBotones2)

var btn1 = document.createElement("button")
btn1.className = "btn1 btn btn-primary"
btn1.innerHTML = "SUSCRÍBETE A PARAMOUNT+"
divBotones2.appendChild(btn1)

var btn2 = document.createElement("button")
btn2.className = "btn2 btn btn-outline-light"
btn2.innerHTML = "YA TENGO PARAMOUNT+"
divBotones2.appendChild(btn2)

var btn3 = document.createElement("button")
btn3.className = "btn3 btn btn-outline-light"
btn3.innerHTML = "INICIA SESIÓN CON TU PROVEEDOR"
divBotones2.appendChild(btn3)





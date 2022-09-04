window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        spanDiv.style.display = 'none'
    }
    else {
        spanDiv.style.display = 'block'
        
    }

    if(window.scrollY >= 400){
        btnNav.classList.remove("d-none")
    }
    else{
        btnNav.classList.add("d-none")
    }
})

let bodyPagina = document.querySelector("body")

//NAVBAR

let navbar = document.createElement("nav")
navbar.className = "navbar fixed-top text-white"
bodyPagina.appendChild(navbar)

let divNavbar = document.createElement("div")
divNavbar.className = "container"
navbar.appendChild(divNavbar)

let logoNavbar = document.createElement("img")
logoNavbar.src = './assets/img/logo.svg'
divNavbar.appendChild(logoNavbar)

let spanDiv = document.createElement("span")
spanDiv.className = "spanNavbar"
divNavbar.appendChild(spanDiv)

let span1 = document.createElement("span")
span1.className = "ps-5"
span1.innerText = "HALO: "
spanDiv.appendChild(span1)

let b = document.createElement("b")
b.innerText = "VER AHORA"
spanDiv.appendChild(b)

var btnNav = document.createElement("button")
// btnNav.className = "d-none btnNav btn btn-primary"
btnNav.classList.add("d-none", "btnNav", "btn", "btn-primary")
btnNav.innerHTML = "SUSCRÍBETE A PARAMOUNT+"
divNavbar.appendChild(btnNav)

let span2 = document.createElement("span")
span2.innerText = "INICIAR SESION"
divNavbar.appendChild(span2)

//SECCION1

let seccion1 = document.createElement("section")
seccion1.className = "fondo1"
bodyPagina.appendChild(seccion1)

let divGeneral = document.createElement("div")
divGeneral.className = "container"
seccion1.appendChild(divGeneral)

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

while (contadorCarrusel1 <= 7) {
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

//SECCION 5

let footer = document.createElement("footer")
footer.className = "bg-black text-muted"
bodyPagina.appendChild(footer)

let divGeneral5 = document.createElement("div")
divGeneral5.className = "container"
footer.appendChild(divGeneral5)

let logoFooter = document.createElement("img")
logoFooter.className = "pb-4"
logoFooter.src = './assets/img/logo.svg'
divGeneral5.appendChild(logoFooter)

let divFooter = document.createElement("div")
divFooter.className = "d-flex"
divGeneral5.appendChild(divFooter)

//UL´S LI´S

let ul1 = document.createElement("ul")
divFooter.appendChild(ul1)

let li1_1 = document.createElement("li")
li1_1.className = "h6"
li1_1.innerText = "Navegación del sitio"
ul1.appendChild(li1_1)

let li1_2 = document.createElement("li")
li1_2.innerText = "Paramount+ Colombia"
ul1.appendChild(li1_2)

let li1_3 = document.createElement("li")
li1_3.innerText = "aramount+ Global"
ul1.appendChild(li1_3)

let ul2 = document.createElement("ul")
divFooter.appendChild(ul2)

let li2_1 = document.createElement("li")
li2_1.className = "h6"
li2_1.innerText = "Privacidad y términos"
ul2.appendChild(li2_1)

let li2_2 = document.createElement("li")
li2_2.innerText = "Acuerdo de Suscripción"
ul2.appendChild(li2_2)

let li2_3 = document.createElement("li")
li2_3.innerText = "Términos de Uso"
ul2.appendChild(li2_3)

let li2_4 = document.createElement("li")
li2_4.innerText = "Política de privacidad y Política"
ul2.appendChild(li2_4)

let li2_5 = document.createElement("li")
li2_5.innerText = "Política de cookies"
ul2.appendChild(li2_5)

let ul3 = document.createElement("ul")
divFooter.appendChild(ul3)

let li3_1 = document.createElement("li")
li3_1.className = "h6"
li3_1.innerText = "Soporte"
ul3.appendChild(li3_1)

let li3_2 = document.createElement("li")
li3_2.innerText = "Ayuda / Contáctanos"
ul3.appendChild(li3_2)

let li3_3 = document.createElement("li")
li3_3.innerText = "Guia de clasificaciones"
ul3.appendChild(li3_3)

let derechos = document.createElement("span")
derechos.innerText = "© 2022 Paramount. Todos los derechos reservados."
divGeneral5.appendChild(derechos)

let bodyPagina = document.querySelector("body")

let seccion1 = document.createElement("section")
seccion1.className = "fondo1"
bodyPagina.appendChild(seccion1)

let navbar = document.createElement("nav")
navbar.className = "nav"
seccion1.appendChild(navbar)

let logo = document.createElement("img")
logo.className = "logo"
logo.src = './assets/img/logo.svg'
navbar.appendChild(logo)


let divGeneral = document.createElement("div")
divGeneral.className = "container"
seccion1.appendChild(divGeneral)

let texto1 = document.createElement("h2")
texto1.className = "texto1 text-white mt-5"
texto1.innerText = "HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
divGeneral.appendChild(texto1)

let texto2 = document.createElement("h6")
texto2.className = "texto2 text-white"
texto2.innerText = "Suscríbete por $13,900.00 COP al Mes. Cancela en cualquier momento. Únete ahora y obtén 7 días gratis."
divGeneral.appendChild(texto2)

let divBotones = document.createElement("div")
divBotones.className= "div1 d-flex flex-column"
divGeneral.appendChild(divBotones)

let btn1 = document.createElement("button")
btn1.className = "mt-3 py-4 btn btn1 btn-primary"
btn1.innerText = "SUSCRÍBETE A PARAMOUNT+"
divBotones.appendChild(btn1)

let btn2 = document.createElement("button")
btn2.className = "mt-3 py-4 h-50 btn btn-outline-light btn2"
btn2.innerText = "YA TENGO PARAMOUNT+"
divBotones.appendChild(btn2)

let btn3 = document.createElement("button")
btn3.className = "my-3 py-4 btn btn-outline-light btn3"
btn3.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
divBotones.appendChild(btn3)







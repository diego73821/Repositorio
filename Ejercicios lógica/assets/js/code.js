    //EJERCICIO 1
    function ejercicio1() {
        var numero_ingresado = prompt("porfavor ingrese un numero");
        var contador = 1
        var resultado = 0
        while (contador <= numero_ingresado) {
            var resultado = resultado + contador
            numeros.innerHTML = "La suma total es: " + resultado
            contador++
        }

        //EJERCICIO 2
        if (numero_ingresado % 2 == 0) {
            validación_impar.innerHTML = "El numero ingresado es par"
        } else {
            validación_impar.innerHTML = "El numero ingresado es impar"
        }
    }




    //EJERCICIO 3
    var edad = document.getElementById('edad')
    var genero = document.getElementById('genero')
    var premio = document.getElementById('premio')
    function ejercicio3() {
        if (edad.value < 10) {
            premio.innerHTML = "Felicidades! puedes reclamar un jugo"
            premio2.innerHTML = ""
        }
        if (edad.value > 18) {
            premio.innerHTML = "Felicidades! puedes reclamar una cerveza"
            premio2.innerHTML = ""
        }
        if (genero.value === "hombre") {
            premio.innerHTML += "<br>Felicidades! una porción de pizza tres carnes"
            premio2.innerHTML = ""
        }
        if (genero.value === "mujer") {
            premio.innerHTML += "<br>Felicidades! una porción de pizza Hawaiana"
            premio2.innerHTML = ""
        }
        if (edad.value > 10 && edad.value < 18) {
            premio.innerHTML = ""
            premio2.innerHTML = "Lo sentimos, no recibes premio"
        }
    }

    //EJERCICIO 4
    var producto1 = document.getElementById('producto1')
    var producto2 = document.getElementById('producto2')
    var total_precio = document.getElementById('total_precio')
    localStorage.setItem("producto1", producto1.value)
    localStorage.setItem("producto2", producto2.value)

    function ejercicio4() {
        var checked1 = producto1.checked;
        var checked2 = producto2.checked;
        if (checked1 && checked2) {
            total_precio.innerHTML = "Total a pagar: " + (parseInt(localStorage.getItem("producto2")) + parseInt(localStorage.getItem("producto1")))
        }
        else if (checked2) {
            total_precio.innerHTML = "Total a pagar: " + localStorage.getItem("producto2")
        }
        else if (checked1) {
            total_precio.innerHTML = "Total a pagar: " + localStorage.getItem("producto1")
        }
        else {
            total_precio.innerHTML = "Seleccione un producto"
        }
    }

    //EJERCICIO 5
    function ejercicio5() {
        var numero_ingresado2 = prompt("porfavor ingrese un numero");
        var multiplicador = 1
        var resultado = 0
        while (multiplicador <= 10) {
            numero_ingresado2id.innerHTML += numero_ingresado2
            numero_multiplicador.innerHTML += multiplicador
            multiplicador++
        }
    }
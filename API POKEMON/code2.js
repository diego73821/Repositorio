function consumo_api_total2(url) {
    let consumo_locations = fetch(url)
    consumo_locations.then(res => res.json())
        .then((data_api) => {
            document.querySelector("#cartas_objetos").innerHTML = ''
            for (const pokemon_api of data_api.results) {
                let consumo2 = fetch(pokemon_api.url)
                consumo2.then(res2 => res2.json())
                    .then((data_api2) => {
                        document.querySelector("#cartas_objetos").innerHTML += `
                        <div class="col">
                        <div class="card">
                            <img src="${data_api2.sprites.default}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data_api2.name}</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                        `
                    })
            }
            // crear_botones(data_api.next, data_api.previous)
            crear_botones(data_api.next, data_api.previous)
        })
}

function crear_botones(url_pagina_siguiente, url_pagina_anterior) {
    let div_paginacion = document.querySelector("#paginacion")
    div_paginacion.innerHTML = ''

    let boton_anterior = document.createElement("button")
    boton_anterior.className = "btn btn-dark"
    // boton_anterior.classList.add("btn", "btn-primary")
    boton_anterior.innerText = "Pagina anterior"
    if (url_pagina_anterior != null) {
        boton_anterior.setAttribute("onclick", `consumo_api_total2('${url_pagina_anterior}')`)
    } else {
        boton_anterior.setAttribute("disabled", '')
    }
    div_paginacion.appendChild(boton_anterior)

    let boton_siguiente = document.createElement("button")
    boton_siguiente.className = "btn btn-dark ms-3"
    // boton_siguiente.classList.add("btn", "btn-dark")
    boton_siguiente.innerText = "Siguiente pagina"
    if (url_pagina_siguiente != null) {
        boton_siguiente.setAttribute("onclick", `consumo_api_total2('${url_pagina_siguiente}')`)
    } else {
        boton_siguiente.setAttribute("disabled", '')
    }
    div_paginacion.appendChild(boton_siguiente)
}

consumo_api_total2("https://pokeapi.co/api/v2/item/")
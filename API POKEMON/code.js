let api_pokemon = "https://pokeapi.co/api/v2/pokemon/"
let consumo1 = fetch(api_pokemon)
consumo1.then(res => res.json())
    .then((data_api) => {
        for (const pokemon_api of data_api.results) {
            let consumo2 = fetch(pokemon_api.url)
            consumo2.then(res2 => res2.json())
                .then((data_api2) => {
                    console.log(data_api2)
                    const name = data_api2.name
                    const sprites = data_api2.sprites
                    document.querySelector("#cartas-pokemon").innerHTML += `
                    <div class="col">
                        <div class="card">
                            <img src="${sprites.front_default}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${pokemon_api_todos.species}</p>
                            </div>
                        </div>
                    </div>
                    `

                })
        }
    })

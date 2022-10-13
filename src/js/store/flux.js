const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {

            personajes: [],
            planetas: [],
            vehiculos: [],
            detallePersonajes: {},
            detallePlanetas: {},
            detalleVehiculo: {},

            listaFavoritos: []

            // onClick={() => eliminarFavorito(i)}

            // // OnKeyDown
            // const handleKeyDown = (event) => {
            //     if (event.key === "Enter") {
            //         event.preventDefault();
            //         setListadeTareas([...listaDeTareas, tarea]); //Nose si necesito esto
            //         setTarea("");
            //         console.log(listaDeTareas);
            //     }
            // };
        },
        actions: {

            // fecth
            getInfoPersonajes: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/people/") //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        personajes: data.results
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },


            // fecth
            getInfoVehiculos: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/") //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        vehiculos: data.results
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },


            // fecth
            getInfoPlanetas: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/") //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        planetas: data.results
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },


            // fecth
            getInfoDetailsPersonajes: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/people/" + id) //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        detallePersonajes: data
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },


            // fecth
            getInfoDetailsPlanetas: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/" + id) //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        detallePlanetas: data
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },


            // fecth
            getInfoDetailsVehiculos: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/" + id) //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        detalleVehiculo: data
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },


            // constante marcar favoritos
            marcarFavoritos: (i) => {
                let store = getStore()
                if (store.listaFavoritos.includes(i)) {
                    getActions().eliminarFavoritos(i)
                } else {
                    setStore({
                        listaFavoritos: [...store.listaFavoritos, i]
                    })
                }
                // setListaFavoritos(filtroFavoritos)
            },

            // constante eliminar favoritos
            eliminarFavoritos: (i) => {
                let store = getStore()
                setStore({
                    listaFavoritos: store.listaFavoritos.filter((item) => item !== i)
                })
            }
        }
    }
};

export default getState;
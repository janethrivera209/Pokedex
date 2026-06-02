import { useEffect, useState } from "react"
import Card from "../components/Card"
import { ListPlus, ScanSearch } from "lucide-react"
// se ejecuta javascriptconst 


const ListaPokemons = ({agregarPokemon}) => {
    //Se ejecuta jsx
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1302"

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);
    const [cantidad, setCantidad] = useState(20);

    const obtenerPokemons = async () => {
        try {
            const resultado = await fetch(URL);
            const datosPokemon = await resultado.json();

            setPokemons(datosPokemon.results);
            setPokemonsFiltrados(datosPokemon.results);

        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        console.log(pokemons);

    }, [pokemons]);

    useEffect(() => {
        obtenerPokemons();

    }, [])

    const eventoBusqueda = (e) => {
        const pokemonBusqueda = e.target.value.trim().toLowerCase();

        const filtro = pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(pokemonBusqueda)
        );

        setPokemonsFiltrados(filtro);
    }

    return (
        <section>
            <div className="flex justify-center mb-10">
                <form className="flex border-2 border-red-900 px-2">
                    <input
                        type="text"
                        placeholder="Buscar un pokemon..."
                        className="outline-none"
                        onChange={eventoBusqueda}
                    />
                    <ScanSearch className="text-red-900" />
                </form>
            </div>

            <ul className="flex flex-wrap w-full justify-center gap-2">
                {
                    pokemonsFiltrados.slice(0, cantidad).map((pokemon) => {

                        const noPokemon = pokemon.url.split("/")[6];

                        return (
                            <Card
                                key={noPokemon}
                                url={pokemon.url}
                                nombre={pokemon.name}
                                noPokemon={noPokemon}
                                pokemon={pokemon}
                                
                            />
                        )
                    })
                }
            </ul>

            <div className="flex w-full justify-center my-10">
                {
                    cantidad < pokemonsFiltrados.length &&
                    <button
                        onClick={() => setCantidad(cantidad + 20)}
                        className="flex gap-1 bg-red-900 text-white px-2 py-1 rounded shadow cursor-pointer"
                    >
                        <ListPlus />
                        Mostrar mas
                    </button>
                }
            </div>

        </section>
    )
}

export default ListaPokemons
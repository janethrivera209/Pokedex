const pokemonTypeColors = {
    normal: "bg-stone-400",
    fire: "bg-orange-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-cyan-300",
    fighting: "bg-red-700",
    poison: "bg-purple-600",
    ground: "bg-amber-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-yellow-700",
    ghost: "bg-violet-700",
    dragon: "bg-indigo-700",
    dark: "bg-zinc-700",
    steel: "bg-slate-400",
    fairy: "bg-pink-300",
    stellar: "bg-teal-400",
    unknown: "bg-gray-500",
};

const normalizarStat = (valor) => {
    const max = 150;
    return Math.min((valor / max) * 100, 100);
};

const PokemonDetalle = ({ pokemon }) => {

    const tipoPrincipal = pokemon.types[0].type.name;

    const hp = pokemon.stats.find(
        s => s.stat.name === "hp"
    ).base_stat;

    const ataque = pokemon.stats.find(
        s => s.stat.name === "attack"
    ).base_stat;

    const defensa = pokemon.stats.find(
        s => s.stat.name === "defense"
    ).base_stat;

    const defensaEspecial = pokemon.stats.find(
        s => s.stat.name === "special-defense"
    ).base_stat;

    const ataqueEspecial = pokemon.stats.find(
        s => s.stat.name === "special-attack"
    ).base_stat;

    const velocidad = pokemon.stats.find(
        s => s.stat.name === "speed"
    ).base_stat;

    return (
        <div className="flex items-start justify-center p-6 w-full gap-10">

            <div className="flex flex-col items-center">

                <div className="relative w-72 h-72 flex items-center justify-center">

                    <h1 className="absolute top-0 left-0 text-3xl font-bold text-gray-700">
                        #{pokemon.id}
                    </h1>

                    <div
                        className={`absolute w-56 h-56 rounded-full ${pokemonTypeColors[tipoPrincipal]} opacity-30`}
                    ></div>

                    <div className="w-50 h-50 flex items-center justify-center">

    <div className="w-36 h-36 flex items-center justify-center">

        <img
            src={
                pokemon.sprites.other.dream_world.front_default ||
                pokemon.sprites.other["official-artwork"].front_default
            }
            alt={pokemon.name}
            className="w-full h-full object-contain"
        />

    </div>

</div>

                </div>

                <h1 className="text-4xl font-bold capitalize mb-8">
                    {pokemon.name}
                </h1>

                <div className="w-96 space-y-5">

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold">HP</span>
                            <span>{hp}</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className={`h-4 rounded-full ${pokemonTypeColors[tipoPrincipal]}`}
                                style={{ width: `${normalizarStat(hp)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold">Ataque</span>
                            <span>{ataque}</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className={`h-4 rounded-full ${pokemonTypeColors[tipoPrincipal]}`}
                                style={{ width: `${normalizarStat(ataque)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold">Defensa</span>
                            <span>{defensa}</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className={`h-4 rounded-full ${pokemonTypeColors[tipoPrincipal]}`}
                                style={{ width: `${normalizarStat(defensa)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold">Ataque Especial</span>
                            <span>{ataqueEspecial}</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className={`h-4 rounded-full ${pokemonTypeColors[tipoPrincipal]}`}
                                style={{ width: `${normalizarStat(ataqueEspecial)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold">Defensa Especial</span>
                            <span>{defensaEspecial}</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className={`h-4 rounded-full ${pokemonTypeColors[tipoPrincipal]}`}
                                style={{ width: `${normalizarStat(defensaEspecial)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold">Velocidad</span>
                            <span>{velocidad}</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className={`h-4 rounded-full ${pokemonTypeColors[tipoPrincipal]}`}
                                style={{ width: `${normalizarStat(velocidad)}%` }}
                            ></div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="w-52 flex flex-col items-start">

                <h1 className="text-xl font-bold mb-4">
                    Tipos
                </h1>

                <div className="flex flex-col gap-3 mb-8 w-full">

                    {pokemon.types.map((tipo) => (
                        <span
                            key={tipo.type.name}
                            className={`px-4 py-2 rounded-full text-white font-bold text-center capitalize ${pokemonTypeColors[tipo.type.name]}`}
                        >
                            {tipo.type.name}
                        </span>
                    ))}

                </div>

                <div className="space-y-2">

                    <h1 className="text-xl font-bold">
                        Peso
                    </h1>

                    <p className="text-lg">
                        {pokemon.weight / 10} kg
                    </p>

                </div>

            </div>

        </div>
    );
};

export default PokemonDetalle;
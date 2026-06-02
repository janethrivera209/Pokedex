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

const obtenerColorStat = (valor) => {
    if (valor < 50) return "bg-red-500";
    if (valor < 80) return "bg-yellow-400";
    return "bg-green-500";
};


const normalizarStat = (valor) => {
    const max = 100;
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
        <div className="flex items-start p-5 w-full">

            <div className="flex flex-col items-center mx-auto">

                <div className="relative flex justify-center items-center mb-6">

                    <h1 className="absolute top-0 left-0 text-2xl font-bold">
                        #{pokemon.id}
                    </h1>

                    <div
                        className={`absolute w-64 h-64 rounded-full blur-3xl opacity-40 ${pokemonTypeColors[tipoPrincipal]}`}
                    ></div>

                    <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        className="relative z-10 w-64 h-64"
                        alt={pokemon.name}
                    />
                </div>

                <h1 className="text-3xl font-bold capitalize mb-4">
                    {pokemon.name}
                </h1>

                <div className="w-80 space-y-4">

                    <div>
                        <div className="flex justify-between">
                            <span>HP</span>
                            <span>{hp}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full ${obtenerColorStat(hp)}`}
                                style={{ width: `${normalizarStat(hp)}%` }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <span>Ataque</span>
                            <span>{ataque}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full ${obtenerColorStat(ataque)}`}
                                style={{ width: `${normalizarStat(ataque)}%` }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <span>Defensa</span>
                            <span>{defensa}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full ${obtenerColorStat(defensa)}`}
                                style={{ width: `${normalizarStat(defensa)}%` }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <span>Ataque Especial</span>
                            <span>{ataqueEspecial}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full ${obtenerColorStat(ataqueEspecial)}`}
                                style={{ width: `${normalizarStat(ataqueEspecial)}%` }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <span>Defensa Especial</span>
                            <span>{defensaEspecial}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full ${obtenerColorStat(defensaEspecial)}`}
                                style={{ width: `${normalizarStat(defensaEspecial)}%` }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <span>Velocidad</span>
                            <span>{velocidad}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full ${obtenerColorStat(velocidad)}`}
                                style={{ width: `${normalizarStat(velocidad)}%` }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-48 flex flex-col items-start ml-6">

                <h1 className="text-lg font-bold mb-2">
                    Tipos
                </h1>

                <div className="flex flex-col gap-2 mb-4">
                    {pokemon.types.map((tipo) => (
                        <span
                            key={tipo.type.name}
                            className={`px-4 py-1 rounded-full text-white font-bold ${pokemonTypeColors[tipo.type.name]}`}
                        >
                            {tipo.type.name}
                        </span>
                    ))}
                </div>

                <h1 className="text-xl font-bold">
                    Peso: {pokemon.weight / 10} kg
                </h1>

            </div>

        </div>
    );
};

export default PokemonDetalle;
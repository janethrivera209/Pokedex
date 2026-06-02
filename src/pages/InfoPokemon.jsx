import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../context/PageContext';
import PokemonDetalle from './PokemonDetalle';

const InfoPokemon = () => {
  const { pokemonSeleccionado, setPokemonSeleccionado } = useContext(PageContext);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(pokemonSeleccionado.url)
      .then(res => res.json())
      .then(setInfo);
  }, [pokemonSeleccionado]);

  return (
    <div>

      <button
        onClick={() => setPokemonSeleccionado(null)}
        className="bg-red-500 text-white px-4 py-2 rounded-md font-bold border-2 border-red-700"
      >
        Regresar
      </button>

      {info ? <PokemonDetalle pokemon={info} /> : <>Cargando...</>}

    </div>
  );
};

export default InfoPokemon;
import { useEffect, useState } from "react";

async function getPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonShown, setPokemonShown] = useState(null);

  useEffect(() => {
    getPokemon().then((results) => {
      console.log("Requisição feita");
      console.log(results);
      setPokemon(results);
    });
  }, []);

  const showDetails = async (url) => {
    const data = await fetch(url).then((res) => res.json());
    console.log("pokemon encontrado");
    console.log(data);
    setPokemonShown(data);
  };

  return (
    <div className="max-w-6xl p-6 mx-auto font-sans">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
        Pokemon
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {pokemon.map((mon) => (
          <div
            key={mon.name}
            className="p-3 text-center transition border rounded-lg hover:shadow-md"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.url.split("/")[6]}.png`}
              alt={mon.name}
              className="w-20 h-20 mx-auto"
            />
            <span className="block my-1 text-sm font-medium capitalize">
              {mon.name}
            </span>
            <button
              onClick={() => showDetails(mon.url)}
              className="px-3 py-1 mt-1 text-xs transition border border-gray-300 rounded-full hover:bg-gray-100"
            >
              Detalhes
            </button>
          </div>
        ))}
      </div>

      {pokemonShown && (
        <div className="pt-6 mt-4 border-t">
          <div className="max-w-md mx-auto text-center">
            <h3 className="mb-2 text-xl font-bold capitalize">
              {pokemonShown.name}
            </h3>
            <img
              src={pokemonShown.sprites.front_default}
              alt={pokemonShown.name}
              className="w-32 h-32 mx-auto"
            />

            <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-left">
              <div>
                <span className="font-semibold">Tipo:</span>
                <div className="flex gap-1 mt-1">
                  {pokemonShown.types.map(({ type }) => (
                    <span
                      key={type.name}
                      className="capitalize bg-gray-100 px-2 py-0.5 rounded text-xs"
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-semibold">Altura / Peso:</span>
                <p className="mt-1 text-gray-600">
                  {pokemonShown.height / 10} m / {pokemonShown.weight / 10} kg
                </p>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <span className="font-semibold">Atributos</span>
              <div className="grid grid-cols-2 mt-2 gap-x-4 gap-y-1">
                {pokemonShown.stats.map(({ base_stat, stat }) => (
                  <div
                    key={stat.name}
                    className="flex justify-between border-b border-gray-100 py-0.5"
                  >
                    <span className="text-gray-600 capitalize">
                      {stat.name}:
                    </span>
                    <span className="font-medium">{base_stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-sm">
              <span className="font-semibold">Habilidades</span>
              <div className="flex flex-wrap gap-1 mt-2">
                {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                  <span
                    key={ability.name}
                    className="bg-gray-100 px-2 py-0.5 rounded text-xs capitalize"
                  >
                    {ability.name}{" "}
                    {is_hidden && (
                      <span className="text-xs text-gray-400"></span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setPokemonShown(null)}
              className="mt-6 text-xs text-gray-500 transition hover:text-gray-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

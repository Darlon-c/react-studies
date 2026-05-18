import { useEffect, useRef, useState } from "react";

async function getPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon().then((results) => {
      console.log("Requisição feita");
      console.log(results);
      setPokemon(results);
    });
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Pokemon</h2>
          <ul className="pokemon" className="grid grid-cols-6 gap-4">
            {pokemon.map((mon) => (
              <li key={mon.name}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.url.split("/")[6]}.png`}
                  alt={mon.name}
                />
                <span>{mon.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

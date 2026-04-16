import { useState } from "react";

export default function App() {
  const [games, setGames] = useState(() => {
    const storageGames = localStorage.getItem("games");
    if (!storageGames) return [];
    return JSON.parse(storageGames);
  });

  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("games", JSON.stringify(newState));
      return newState;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      return newState;
    });
  };

  return (
    <>
      <div>
        <h1>Biblioteca de Jogos</h1>
        <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título:</label>
            <input
              className="border rounded"
              type="text"
              name="name"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cover">Capa:</label>
            <input
              className="border rounded"
              type="text"
              name="cover"
              id="cover"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
            />
          </div>
          <button type="submit" className="border">
            Adicionar
          </button>
        </form>
        <div>
          {games.map((game) => (
            <div key={game.id}>
              <img width="300px" src={game.cover} />
              <div>
                <h2>{game.title}</h2>
                <button onClick={() => removeGame(game.id)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

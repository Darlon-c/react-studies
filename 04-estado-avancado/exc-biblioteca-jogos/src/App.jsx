import { useState } from "react";

export default function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => [...state, game]);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log({title, cover})
    setTitle("")
    setCover("")
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
      </div>
    </>
  );
}

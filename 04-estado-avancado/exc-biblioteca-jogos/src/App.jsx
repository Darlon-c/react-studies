import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return ( 
    <>
      <div>
        <h1>Biblioteca de Jogos</h1>
        <form className="flex justify-center gap-4">
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

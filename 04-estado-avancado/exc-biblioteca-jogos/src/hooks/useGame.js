import { useState } from "react";
export default function useGame() {
  const [games, setGames] = useState(() => {
    const storageGames = localStorage.getItem("games");
    if (!storageGames) return [];
    return JSON.parse(storageGames);
  });

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("games", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      return newState;
    });
  };

  return { games, addGame, removeGame };
}

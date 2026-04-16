import Game from "./components/Game";
import NewGame from "./components/NewGame";
import useGame from "./hooks/useGame";

export default function App() {
  const { games, addGame, removeGame } = useGame();

  return (
    <>
      <div>
        <h1>Biblioteca de Jogos</h1>
        <NewGame addGame={addGame}></NewGame>
        <div>
          {games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            ></Game>
          ))}
        </div>
      </div>
    </>
  );
}

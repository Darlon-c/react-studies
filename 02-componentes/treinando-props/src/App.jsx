import Card from "./components/Card.jsx";
import poster from "/poster.jpg"
import poster2 from "/poster2.jpg"
import poster3 from "/poster3.jpg"

export default function App() {
  return (
    <>
      <Card posterImg={poster} title="Pôster: Star Wars"></Card>
      <Card posterImg={poster2} title="Pôster: Imperio contra ataca"></Card>
      <Card posterImg={poster3} title="Pôster: Retorno do Jedi"></Card>
    </>
  );
}

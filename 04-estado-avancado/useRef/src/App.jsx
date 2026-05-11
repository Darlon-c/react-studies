import { useRef, useState } from "react";
import ExampleRef from "./components/ExampleRef";

export default function App() {
  let variable = 0;

  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showValue = () => {
    alert(`
      variável: ${variable}
      ref: ${ref.current}
      state: ${state} 
      `);
  };

  return (
    <>
      <h1>Exemplo de ref</h1>
      <ExampleRef></ExampleRef>
      <hr />
      <div>UseRef</div>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <hr />
      <button onClick={() => variable++}>Aumentar variável</button> <br />
      <button onClick={() => ref.current++}>Aumentar ref</button> <br />
      <button onClick={() => setState((state) => state + 1)}>
        Aumentar state
      </button>
      <br /> <br />
      <button onClick={showValue}>Mostrar valores</button>
    </>
  );
}

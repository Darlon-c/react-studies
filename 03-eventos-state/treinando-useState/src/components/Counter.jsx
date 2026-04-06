import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decree() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    return setCount(0);
  }

  return (
    <div className="flex justify-center gap-4">
      <h1>Valor: {count}</h1>
      <button onClick={increase}>Incrementar</button>
      <button onClick={decree}>Decrementar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
}

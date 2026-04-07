//  Um contador que vai de 0 a 10, mas não passa de 10 e não fica negativo. Com botões + e -, e um indicador visual quando chega no limite.

import { useState } from "react";

export default function CounterWhithLimit() {
  let [count, setCount] = useState(0);

  function increase() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Não vai ser mais de 10");
    }
  }

  function decree() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="flex justify-center gap-4">
        <h1>Valor: {count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decree}>-</button>
      </div>
    </>
  );
}

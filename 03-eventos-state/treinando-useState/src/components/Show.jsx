import { useState } from "react";

export default function Show() {
  let [textVisible, setTextVisible] = useState(true);

  function toggle() {
    setTextVisible(!textVisible);
  }

  return (
    <>
      <div>
        <p>{textVisible ? "Texto VISÍVEL" : "Texto ESCONDIDO"}</p>

        <button onClick={toggle}>{textVisible ? "Esconder" : "Mostrar"}</button>
      </div>
    </>
  );
}

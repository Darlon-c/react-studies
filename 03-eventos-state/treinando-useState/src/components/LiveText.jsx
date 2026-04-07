import { useState } from "react";

export default function LiveText() {
  let [textNull, setTextNull] = useState("");

  function showText(e) {
    setTextNull(e.target.value);
  }

  function clear() {
    setTextNull("")
  }

  return (
    <>
      <div>
        <input
          className="border"
          type="text"
          value={textNull}
          onChange={showText}
        />
        <p>{textNull}</p>
        <button onClick={clear}>Clear</button>
      </div>
    </>
  );
}

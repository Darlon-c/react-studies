import { useRef } from "react";

export default function ExampleRef() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} className="border" type="text" />
      <button onClick={handleClick}>Focar input</button>
    </div>
  );
}

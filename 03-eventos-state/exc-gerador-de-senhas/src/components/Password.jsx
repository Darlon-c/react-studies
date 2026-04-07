import { useState } from "react";

export default function Password() {
  const length = 12;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";

  const [pass, setPass] = useState("");

  function generatePassword() {
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setPass(result);
  }

  return (
    <>
      <div className="flex justify-center gap-4 py-24">
        <span className="font-semibold text-center">{pass}</span>
        <button className="px-2 py-1 border rounded bg-emerald-500 hover:bg-emerald-700" onClick={generatePassword}>Gerar</button>
        <button className="px-2 py-1 border rounded bg-amber-500 hover:bg-amber-700">Copiar</button>
      </div>
    </>
  );
}

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

  function copy() {
    if (!pass) {
      alert("Não há senha para copiar");
      return;
    } else {
      navigator.clipboard.writeText(pass);
      alert("Senha copiada com sucesso!");
    }
  }

  return (
    <>
      <div className="flex justify-center my-8 text-2xl font-bold">
        <h1>Gerador de senhas</h1>
      </div>
      <div className="flex justify-center gap-4 py-12">
        <span className="font-semibold text-center">{pass}</span>
        <button
          className="px-2 py-1 border rounded bg-emerald-500 hover:bg-emerald-700"
          onClick={generatePassword}
        >
          Gerar
        </button>
        <button
          className="px-2 py-1 border rounded bg-amber-500 hover:bg-amber-700"
          onClick={copy}
        >
          Copiar
        </button>
      </div>
    </>
  );
}

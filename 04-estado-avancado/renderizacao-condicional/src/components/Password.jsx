import { useState } from "react";
import Input from "./Input";

export default function Password() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";

  const [pass, setPass] = useState("");
  const [textCopy, setTextCopy] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(8);
  const [customSize, setCustomSize] = useState(false);

  function generatePassword() {
    let result = "";

    for (let i = 0; i < passwordSize; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setPass(result);
    setTextCopy("Copiar");
  }

  function copy() {
    if (!pass) {
      alert("Não há senha para copiar");
      return;
    } else {
      navigator.clipboard.writeText(pass);
      setTextCopy("Copiado!");
      alert("Senha copiada com sucesso!");
    }
  }

  return (
    <>
      <div className="flex justify-center my-8 text-2xl font-bold">
        <h1>Gerador de senhas</h1>
      </div>
      <div className="flex justify-center gap-4 py-12">
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          checked={customSize}
          onChange={() => {
            if (customSize) {
              setPasswordSize(8);
            }
            setCustomSize(!customSize);
          }}
        />
      </div>
      {customSize ? (
        <Input
          passwordSize={passwordSize}
          setPasswordSize={setPasswordSize}
        ></Input>
      ) : null}
      <div className="flex justify-center gap-4 py-12">
        <br />
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
          {textCopy}
        </button>
      </div>
    </>
  );
}

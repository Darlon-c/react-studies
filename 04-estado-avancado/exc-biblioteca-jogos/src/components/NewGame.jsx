import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGame.PropTypes = {
  addGame: PropTypes.func,
};

export default function NewGame({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
      <TextInput
        id="title"
        label="Título"
        value={title}
        setValue={setTitle}
      ></TextInput>
      <TextInput
        id="cover"
        label="Capa"
        value={cover}
        setValue={setCover}
      ></TextInput>
      <button type="submit" className="border">
        Adicionar
      </button>
    </form>
  );
}

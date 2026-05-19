import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const newTask = () => {
    if (!task) {
      alert("Tarefa vazia");
    }

    console.log(listTask);
    setListTask([
      ...listTask,
      {
        id: Date.now(),
        text: task,
      },
    ]);
    setTask("");
  };

  return (
    <>
      <section>
        <div className="flex justify-center gap-8 py-20">
          <input
            className="border"
            type="text"
            placeholder="Your task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button onClick={newTask} className="px-4 border">
            Save
          </button>
        </div>
        <div className="flex justify-center">
          <ul>
            {listTask.map((tarefa) => (
              <li key={tarefa.id}>{tarefa.text}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

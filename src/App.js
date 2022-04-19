import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    setTasks([...tasks, input]);

    localStorage.setItem('@todo_tasks', JSON.stringify([...tasks, input]));
  }

  useEffect(() => {
    const tasksStorage = localStorage.getItem('@todo_tasks');

    if(tasksStorage) {
      const tempTasks = JSON.parse(tasksStorage);
      setTasks(tempTasks);
    }
  }, []);
  
  return (
    <div>
      <h1>Hello World</h1>
      <input onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTask}>Salvar</button>
      {tasks.map((task) => (
        <p>{task}</p>
      ))}
    </div>
  );
}

export default App;

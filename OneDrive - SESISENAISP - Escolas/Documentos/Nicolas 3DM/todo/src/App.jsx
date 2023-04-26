import { useState } from "react";
import Task from "./components/task.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState();
  const [isCompleted, setIsCompleted] = useState(false);

  function createTask(e) {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: isCompleted,
    };
    setTasks({ ...tasks, newTask })
    localStorage.setItem(
      "@task",
      JSON.stringify(tasks)
    );
    setTaskTitle("")
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Todo List</h1>
        <form className="header-input" onSubmit={createTask}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Adicione uma nova tarefa"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button>Criar</button>
        </form>
      </header>
      <main className="main">
        <header className="header-main">
          <div>
            <h3>Total</h3>
            <p>10</p>
          </div>
          <div>
            <h3>Tarefas concluídas</h3>
            <p>1 de 10</p>
          </div>
        </header>
        <section>
          <Task isCompleted={isCompleted} />
        </section>
      </main>
    </div>
  );
}

export default App;

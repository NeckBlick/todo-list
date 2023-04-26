import { useState, useEffect } from "react";
import Task from "./components/task.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState();
  const qntsTasks = tasks.length;

  // Create task
  function createTask(e) {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem("@task", JSON.stringify(tasks));
    setTaskTitle("");
  }

  // Delete task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("@task"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

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
            <p>{qntsTasks}</p>
          </div>
          <div>
            <h3>Tarefas concluídas</h3>
            <p> de {qntsTasks}</p>
          </div>
        </header>
        <section>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              setTasks={setTasks}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;

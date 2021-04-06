import "./App.css";
import ToDoBlock from "./ToDoBlock";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "feeding the rabbit",
    "going to work",
    "painting a picture",
    "watering the plants",
  ]);

  const removeTask = (taskToRemove) => {
    const filteredTasks = tasks.filter((task) => task !== taskToRemove);

    setTasks(filteredTasks);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      {tasks.map((task) => (
        <ToDoBlock key={task} label={task} onClick={() => removeTask(task)} />
      ))}
      <Input onAddItemToDo={(newTask) => addTask(newTask)} />
    </div>
  );
}

export default App;

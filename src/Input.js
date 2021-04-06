import { useState } from "react";

const Input = ({ onAddItemToDo }) => {
  const [newItemToDo, setNewItemToDo] = useState("");

  return (
    <div className="input-container">
      <label>Type your thing to do here</label>
      <br />
      <input
        value={newItemToDo}
        onChange={(event) => setNewItemToDo(event.target.value)}
      />
      <button onClick={() => onAddItemToDo(newItemToDo)}>+</button>
    </div>
  );
};

export default Input;

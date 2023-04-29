import { useState } from "react";
import "../styles/AddTodo.scss";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    if (todoItem.title.trim().length !== 0) {
      todoItem.title = todoItem.title.trim();
      addItem(todoItem);
    }
    setTodoItem({ title: "" });
  };

  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };
  return (
    <div className="AddTodo">
      <input
        className="AddTodo_input-todo"
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onEnterKeyDown}
        autoFocus
      />
      <button className="AddTodo_btn-add" onClick={onButtonClick}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;

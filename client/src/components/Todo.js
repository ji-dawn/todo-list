import { useState } from "react";
import "../styles/Todo.scss";

const Todo = ({ item, deleteItem, updateItem }) => {
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClicked = () => {
    deleteItem(todoItem);
  };

  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // TODO: toggle로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
      updateItem(todoItem); // 수정 case 1. text input에서 Enter 시 수정
    }
  };

  const editEventHandler = (e) => {
    // rest : id, done
    const { title, ...rest } = todoItem;
    if (!readOnly) {
      setTodoItem({ title: e.target.value, ...rest });
    } else {
      setTodoItem({ title: todoItem.title, ...rest });
    }
  };

  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem); // 수정 case 2. checkbox input에서 check 여부 변경 시 수정
  };

  return (
    <div className="Todo">
      <input
        className="Todo_input-checkbox"
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onChange={checkboxEventHandler}
      />
      <input
        className="Todo_input-edit"
        style={{ outlineColor: readOnly ? "red" : "lightgreen" }}
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
        onChange={editEventHandler}
        disabled={todoItem.done ? true : false}
      />
      <button
        className="Todo_btn-delete"
        onClick={onDeleteButtonClicked}
        disabled={todoItem.done ? true : false}
      >
        DELETE
      </button>
    </div>
  );
};

export default Todo;

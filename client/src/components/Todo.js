import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
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
    setTodoItem({ done: e.target.checked, ...rest });
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onChange={checkboxEventHandler}
      />
      <input
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
        onChange={editEventHandler}
      />
      <button onClick={onDeleteButtonClicked}>DELETE</button>
    </div>
  );
};

export default Todo;

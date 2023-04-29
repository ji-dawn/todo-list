import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "./styles/App.scss";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "공부하기",
      done: false,
    },
    {
      id: 2,
      title: "운동하기",
      done: false,
    },
    {
      id: 3,
      title: "씻기",
      done: true,
    },
  ]);

  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;

    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = (targetItem) => {
    const newTodoItems = todoItems.filter((item) => targetItem.id !== item.id);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <div className="App_header">Todo</div>
      {/* prop으로 함수 전달 */}
      <AddTodo addItem={addItem} />
      {todoItems.length === 0 ? (
        <div className="App_todo-rest">할 일이 없습니다...</div>
      ) : (
        <div className="App_todo-rest">{todoItems.length} todos</div>
      )}

      {todoItems.map((item) => {
        console.log(item);
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

export default App;

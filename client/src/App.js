import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

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
      {/* prop으로 함수 전달 */}
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => {
        console.log(item);
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

export default App;

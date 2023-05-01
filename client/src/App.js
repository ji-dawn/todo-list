import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import "./styles/App.scss";
import { API_BASE_URL } from "./app-cofing";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("mount 완료");
    const getTodos = async () => {
      const res = await axios.get(`${API_BASE_URL}/api/todos`);
      console.log(res);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // Todo 추가하는 함수
  const addItem = async (newItem) => {
    // newItem => { title: 'xxx' }
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // // newItem => { title: 'xxx', id: n, done: false }
    // setTodoItems([...todoItems, newItem]);

    // axios 요청
    const res = await axios.post("http://localhost:8000/api/todo", newItem);
    console.log(res);
    // ...todoItems : 기존 item
    // res.data : 새로 추가된 item
    setTodoItems([...todoItems, res.data]);
  };

  // Todo 삭제하는 함수
  const deleteItem = async (targetItem) => {
    await axios.delete(`${API_BASE_URL}/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  // Todo 수정하는 함수
  // (1) 서버 API를 이용해 DB 데이터 업데이트
  // (2) 변경된 내용을 화면에 다시 출력
  const updateItem = async (targetItem) => {
    await axios.patch(`${API_BASE_URL}/api/todo/${targetItem.id}`, targetItem);
  };

  return (
    <div className="App">
      <header>My Todo App</header>
      {/* todo 추가 input */}
      <AddTodo addItem={addItem} />

      {/* 미션: 현재 투두 목록 개수 보이기 */}
      <div className="left-todos">😜 {todoItems.length} Todos</div>

      {/* todo 목록 보이기 */}
      {todoItems.length > 0 ? (
        todoItems.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          );
        })
      ) : (
        <p className="empty-todos">Todo를 추가해주세요 🐱‍🏍</p>
      )}
    </div>
  );
}

export default App;

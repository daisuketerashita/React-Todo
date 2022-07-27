import {useState,useRef} from 'react';
import ToDoList from "./ToDoList";

function App() {
  const [todos,setTodos] = useState([
    {id: 1,name: 'メールを送る',completed: false},
  ]);
  
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos,{id: "1",name: name,completed: false}];
    });
    todoNameRef.current.value = null;
  };

  return (
    <div>
      <ToDoList todos={todos}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>タスクの削除</button>
      <div>残りのタスク：0</div>
    </div>
  );
}

export default App;

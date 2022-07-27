import {useState} from 'react';
import ToDoList from "./ToDoList";

function App() {
  const [todos,setTodos] = useState(["Todo1","Todo2"]);

  return (
    <div>
      <ToDoList todos={todos}/>
      <input type="text" />
      <button>タスクを追加</button>
      <button>タスクの削除</button>
      <div>残りのタスク：0</div>
    </div>
  );
}

export default App;

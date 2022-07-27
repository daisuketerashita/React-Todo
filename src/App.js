import ToDoList from "./ToDoList";

function App() {
  return (
    <div>
      <ToDoList />
      <input type="text" />
      <button>タスクを追加</button>
      <button>タスクの削除</button>
      <div>残りのタスク：0</div>
    </div>
  );
}

export default App;

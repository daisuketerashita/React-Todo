import React from 'react'
import Todo from './Todo';

const ToDoList = ({todos}) => {
  return (
    todos.map((todo) => <Todo todo={todo} key={todo.name} />)
  );
}

export default ToDoList
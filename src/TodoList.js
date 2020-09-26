import React, { useState } from 'react';
import './TodoList.scss';


const SAMPLE_TODOS = [
  { task: 'Finish todo app!' },
  { task: 'Take out the trash' },
  { task: 'Buy milk' }
];


function TodoList() {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  return <>
    <h2>To do</h2>
    {todos.map((item, index) => {
      if (!item.completed) {
        return <label>
          <input
            type='checkbox'
            onChange={(e) => {
              let newTodos = [...todos];
              newTodos[index] = {
                task: item.task,
                completed: e.target.checked
              };
              console.log(newTodos);
              setTodos(newTodos);
            }}
          />
          {item.task}
        </label>;
      }
    })}

    <h2>Done</h2>
    {todos.map((item, index) => {
      if (item.completed) {
        return <label>
          <input
            type='checkbox'
            defaultChecked
            onChange={(e) => {
              let newTodos = [...todos];
              newTodos[index] = {
                task: item.task,
                completed: e.target.checked
              };
              console.log(newTodos);
              setTodos(newTodos);
            }}
          />
          {item.task}
        </label>;
      }
    })}

  </>;
}


export default TodoList;

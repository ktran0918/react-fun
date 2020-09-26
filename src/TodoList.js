import React, { useState } from 'react';
import './TodoList.scss';


const SAMPLE_TODOS = [
  { task: 'Finish todo app!', completed: false },
  { task: 'Take out the trash', completed: false },
  { task: 'Buy milk', completed: false }
];


function TodoList() {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  // CheckList component
  function CheckList({ isCompleted }) {
    return todos.map((item, index) =>
      item.completed == isCompleted &&
      <label className='listItem'>
        <input
          type='checkbox'
          defaultChecked={isCompleted}
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
      </label>
    );
  }

  return <main>
    <h2>To do</h2>
    <CheckList isCompleted={false} />

    <h2>Done</h2>
    <CheckList isCompleted={true} />

  </main>;
}


export default TodoList;

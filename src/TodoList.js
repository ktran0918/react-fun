import React, { useState } from 'react';
import './TodoList.scss';


const SAMPLE_TODOS = [
  { task: 'Finish todo app!', completed: true },
  { task: 'Take out the trash', completed: false },
  { task: 'Buy milk', completed: false }
];


function TodoList() {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  // CheckList component
  function CheckList({ isCompleted }) {
    return todos.map((item, index) =>
      item.completed == isCompleted &&
      <label className='list-item'>
        <input
          type='checkbox'
          defaultChecked={isCompleted}
          onChange={(e) => {
            let newTodos = [...todos];
            newTodos[index] = {
              task: item.task,
              completed: e.target.checked
            };

            setTodos(newTodos);
          }}
        />
        {item.task}
        <button className='delete-button'
          onClick={() => {
            const firstHalf = todos.splice(0, index);
            const secondHalf = todos.splice(index + 1);
            setTodos(firstHalf.concat(secondHalf));
          }}
        >
          &#x1F5D9;
        </button>
      </label>
    );
  }

  return <main>
    {/* To do list */}
    <h2>To do</h2>
    <CheckList isCompleted={false} />

    {/* Add list item */}
    <form
      id='add-item-form'
      onSubmit={(e) => {
        e.preventDefault();
        const newItem = {
          task: e.target.newTask.value,
          completed: false
        };
        setTodos([...todos, newItem]);
        e.target.newTask.value = '';
      }}
    >
      <input type="checkbox" readOnly checked={false} />
      <input
        type="text"
        name='newTask'
        placeholder='Add new item...'
        autoComplete='off'
      />
    </form>

    {/* "Done" list */}
    <h2>Done</h2>
    <CheckList isCompleted={true} />

  </main>;
}


export default TodoList;

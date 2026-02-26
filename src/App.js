import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleStatus, deleteTask } from './features/todo/todoSlice';

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div>
      <h2>Redux Todo App</h2>

      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => dispatch(toggleStatus(todo.id))}
            >
              {todo.text}
            </span>

            <button onClick={() => dispatch(deleteTask(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
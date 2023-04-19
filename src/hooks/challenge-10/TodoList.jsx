import React from 'react';

export const TodoList = ({ todos, deleteTodo, toggleDone }) => {
  const handleDelete = todo => {
    deleteTodo(todo);
  };

  const handleToggleDone = todo => {
    toggleDone(todo);
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.done} onChange={() => handleToggleDone(todo)} />
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }} onClick={() => handleToggleDone(todo)}>
            {todo.description}
          </span>
          <button onClick={() => handleDelete(todo)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

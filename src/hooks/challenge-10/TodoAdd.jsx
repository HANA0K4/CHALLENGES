import React, { useState } from 'react';

export const TodoAdd = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime(),
      description: newTodo,
      done: false,
    };
    addTodo(todo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

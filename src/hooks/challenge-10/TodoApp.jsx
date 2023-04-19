import React from 'react';
import { useTodo } from './useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleDone, clearTodos, countTodos, countPendingTodos } = useTodo();

  return (
    <>
      <h1>
        Tareas: {countTodos}, <small>pendientes: {countPendingTodos}</small>
      </h1>
      <div>
        <button onClick={clearTodos}>Borrar todos</button>
      </div>
      <hr />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
      <TodoAdd addTodo={addTodo} />
    </>
  );
};


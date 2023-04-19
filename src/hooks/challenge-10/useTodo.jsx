import { useState, useEffect } from 'react';

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    //condition to avoid adding empty todos
    if (todo.description === '') {
      alert('Complete la descripcion del todo');
      return;
    }

    setTodos([...todos, todo]);
  };

  const deleteTodo = todoToDelete => {
    setTodos(todos.filter(todo => todo.id !== todoToDelete.id));
  };

  const toggleDone = todoToToggle => {
    setTodos(
      todos.map(todo => {
        if (todo.id === todoToToggle.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const countTodos = todos.length;

  const countPendingTodos = todos.filter(todo => !todo.done).length;

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleDone,
    clearTodos,
    countTodos,
    countPendingTodos,
  };
};

export { useTodo };

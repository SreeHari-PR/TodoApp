import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addTodo = (text) => {
    axios.post('http://localhost:5000/todos', { text }).then((response) => {
      setTodos([...todos, response.data]);
    });
  };

  const toggleTodo = (id) => {
    axios.put(`http://localhost:5000/todos/${id}`).then((response) => {
      setTodos(todos.map((todo) =>
        todo._id === id ? { ...todo, completed: response.data.completed } : todo
      ));
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  const editTodo = (id, text) => {
    axios.put(`http://localhost:5000/todos/${id}`, { text }).then((response) => {
      setTodos(todos.map((todo) =>
        todo._id === id ? { ...todo, text: response.data.text } : todo
      ));
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4 text-neonBlue">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <ul className="mt-4">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

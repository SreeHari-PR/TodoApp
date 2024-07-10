import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow px-4 py-2 border border-neonBlue rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-neonBlue placeholder-gray-500"
        placeholder="Add a new todo"
      />
      <button
        type="submit"
        className="px-4 py-2 text-black bg-neonGreen rounded-lg shadow-neonGreen hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-neonGreen"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;

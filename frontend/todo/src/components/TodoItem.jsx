import React, { useState } from 'react';
import { FaEdit,FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    editTodo(todo._id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-4 bg-gray-900 rounded-lg shadow-lg mb-2">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow mr-4 p-2 bg-gray-800 text-white rounded-lg"
        />
      ) : (
        <span
          className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-neonGreen' : 'text-neonBlue'} hover:underline`}
          onClick={() => toggleTodo(todo._id)}
        >
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button
          onClick={handleEditSubmit}
          className="ml-4 px-4 py-2 text-black bg-neonPink rounded-lg shadow-neonPink hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-neonPink"
        >
          Save
        </button>
      ) : (
        <>
          <button
            onClick={handleEdit}
            className="ml-4 px-4 py-2 text-black bg-neonPink rounded-lg shadow-neonPink hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-neonPink"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => deleteTodo(todo._id)}
            className="ml-4 px-4 py-2 text-black bg-neonPink rounded-lg shadow-neonPink hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-neonPink"
          >
            <FaTrash />
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

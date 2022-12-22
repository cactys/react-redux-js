import React from 'react';

const Todo = ({ todo, toggleTodoCompleted, removeTodo }) => {
  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  const handleTodoCompleted = () => {
    toggleTodoCompleted(todo.id);
  };

  return (
    <li className="todo-list__item">
      <label className="todo-list__label">
        <input
          type="checkbox"
          onChange={handleTodoCompleted}
          checked={todo.completed}
          className="todo-list__checkbox"
        />
        <span className="todo-list__checkbox-bubble" />
      </label>
      <p
        className={`todo-list__text ${
          todo.completed ? 'todo-list__text_crossed' : ''
        }`}
      >
        {todo.text}
      </p>
      <button
        type="button"
        className="todo-list__button"
        onClick={handleRemoveTodo}
      >
        &times; удалить
      </button>
    </li>
  );
};

export default Todo;

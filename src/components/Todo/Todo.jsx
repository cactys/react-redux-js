import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../../store/todoSlice';

const Todo = ({ id, completed, text }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(removeTodo({ id }));
  };

  const toggleTask = () => {
    dispatch(toggleTodoCompleted({ id }));
  };

  return (
    <li className="todo-list__item">
      <label className="todo-list__label">
        <input
          type="checkbox"
          onChange={toggleTask}
          checked={completed}
          className="todo-list__checkbox"
        />
        <span className="todo-list__checkbox-bubble" />
      </label>
      <p
        className={`todo-list__text ${
          completed ? 'todo-list__text_crossed' : ''
        }`}
      >
        {text}
      </p>
      <button type="button" className="todo-list__button" onClick={removeTask}>
        &times; удалить
      </button>
    </li>
  );
};

export default Todo;

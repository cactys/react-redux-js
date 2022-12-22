import React from 'react';
import './Input.css';

const Input = ({ value, setText, addTodo }) => {
  const handleInputTodo = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <label className="input">
      <form className="input__form" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleInputTodo}
          className="input__input-todo"
          type="text"
          placeholder="Задача"
          name="todo"
        />
        <button type="submit" onClick={addTodo} className="input__add-button">
          Добавить запись
        </button>
      </form>
    </label>
  );
};

export default Input;

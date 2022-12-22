import React from 'react';
import './Input.css';

const Input = ({ value, setText, addTodo }) => {
  return (
    <label className="input">
      <form className="input__form">
        <input
          value={value}
          onChange={(e) => setText(e.target.value)}
          className="input__input-todo"
          type="text"
          placeholder="Задача"
          name="todo"
          required
        />
        <button type="submit" onClick={addTodo} className="input__add-button">
          Добавить запись
        </button>
      </form>
    </label>
  );
};

export default Input;

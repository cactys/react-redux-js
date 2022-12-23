import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      {todos.length ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
            />
          ))}
        </ul>
      ) : (
        <div className="todo-list__void">
          <p className="todo-list__text">Задачи отсутствуют</p>
        </div>
      )}
    </>
  );
};

export default TodoList;

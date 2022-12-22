import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ todos, toggleTodoCompleted, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

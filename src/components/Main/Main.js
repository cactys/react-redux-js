import React from 'react';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';
import './Main.css';

const Main = ({
  value,
  setText,
  addTodo,
  todos,
  toggleTodoCompleted,
  removeTodo,
}) => {
  return (
    <main className="content">
      <Input value={value} setText={setText} addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodo={removeTodo}
      />
    </main>
  );
};

export default Main;

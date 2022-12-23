import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';
import './Main.css';

const Main = ({ value, setText }) => {
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ value }));
    setText('');
  };

  return (
    <main className="content">
      <Input value={value} setText={setText} addTask={addTask} />
      <TodoList />
    </main>
  );
};

export default Main;

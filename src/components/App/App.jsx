import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="page">
      <Header />
      <Main
        value={text}
        setText={setText}
      />
    </div>
  );
}

export default App;

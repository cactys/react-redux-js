import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSignIn = () => {
    setIsLogin(true);
  };

  const handleSignOut = () => {
    setIsLogin(false);
  };

  return (
    <header className="header">
      <h1 className="header__title">Todo</h1>
      {isLogin ? (
        <ul className="header__navigator">
          <li className="header__item">
            <a href="/" className="header__link">
              enemy@ene.my :
            </a>
          </li>
          <li className="header__item">
            <button
              type="button"
              onClick={handleSignOut}
              className="header__button"
            >
              выход
            </button>
          </li>
        </ul>
      ) : (
        <ul className="header__navigator">
          <li className="header__item">
            <button type="button" className="header__button">
              регистрация
            </button>
          </li>
          <li className="header__item">
            <button
              type="button"
              onClick={handleSignIn}
              className="header__button"
            >
              войти
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;

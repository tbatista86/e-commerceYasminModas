import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import search from '../../assets/icons/search-solid.svg';
import cart from '../../assets/icons/shopping-cart-solid.svg';

import './style.css';

const Header = (props) => {
  const cartCount = useSelector((state) => state.cart.length);
  return (
    <div className="header">
      <header className="header__nav">
        <NavLink to="/">
          <span className="header__logo">Yasmin Modas</span>
        </NavLink>
        <ul>
          <NavLink to="/search" onClick={props.drawerSearchClick}>
            <img src={search} alt="pesquisa" className="header__icon" />
          </NavLink>
          <NavLink to="/cart" onClick={props.drawerClickHandler}>
            <img src={cart} alt="carrinho" className="header__icon" />
            <span className="header__count">{cartCount}</span>
          </NavLink>
        </ul>
      </header>
    </div>
  );
};

export default Header;

import React from 'react';

import './style.css';

const cartItem = ({ cart, removeQtdItem, addQtdItem, removeItemCart }) => {
  return (
    <div className="cart__content">
      <div className="img">
        <img src={cart.img} alt={cart.name} />
      </div>
      <div className="cart__detail">
        <h4>{cart.name}</h4>
        <p>Tam.: {cart.size}</p>
        <button onClick={() => removeQtdItem(cart.code_color)}>-</button>
        <span>{cart.qdt}</span>
        <button onClick={() => addQtdItem(cart.code_color)}>+</button>
        <span
          className="cart__remove"
          onClick={() => {
            removeItemCart(cart.code_color);
          }}
        >
          Remover
        </span>
      </div>
      <div className="cart__price">
        <h4>{cart.price}</h4>
        <p>{cart.installments}</p>
      </div>
    </div>
  );
};

export default cartItem;

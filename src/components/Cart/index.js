import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem';
import {
  removeItem,
  updateQtdRemoveItem,
  updateQtdAddItem,
} from '../../store/ducks/cart';
import arrow from '../../assets/icons/arrow-left.svg';
import './styles.css';

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cart = carts.map((cart) => {
    let idKey = cart.code_color;

    const removeItemCart = (code_color) => {
      dispatch(removeItem(code_color));
    };

    const removeQtdItem = (code_color) => {
      dispatch(updateQtdRemoveItem(code_color));
    };

    const addQtdItem = (code_color) => {
      dispatch(updateQtdAddItem(code_color));
    };

    return (
      <CartItem
        cart={cart}
        key={idKey}
        removeQtdItem={removeQtdItem}
        addQtdItem={addQtdItem}
        removeItemCart={removeItemCart}
      />
    );
  });

  return (
    <div className="cart__drawer">
      <nav className="cart__nav">
        <img src={arrow} alt="votar" className="cart__icon" />
        <span>Meu carrinho</span>
      </nav>

      {carts.length === 0 ? (
        <p className="cart__vazio">Seu carrinho esta vazio!</p>
      ) : (
        cart
      )}
    </div>
  );
};

export default Cart;

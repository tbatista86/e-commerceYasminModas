import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/ducks/cart';

import './style.css';

export default function Product(props) {
  const [size, setSize] = useState('');
  const carts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  console.log(props);

  const [...btnsSize] = props.location.state.product.sizes;

  const productCart = props.location.state.product;

  function handleAddCart(product) {
    if (!size) return alert('Escolha o tamanho do produto');

    if (carts.some((cart) => cart.code_color === product.code_color)) {
      return;
    }

    const selectedProduct = {
      code_color: product.code_color,
      name: product.name,
      size: size,
      price: product.actual_price,
      installments: product.installments,
      img: product.image,
      qdt: 1,
    };

    alert('Produto adicionado ao carrinho');

    dispatch(addItem(selectedProduct));
    setSize('');
  }

  function selectTedSize(item) {
    setSize(item);
  }

  const groups = btnsSize.map((item) => {
    if (item.available) {
      return (
        <button key={item.sku} onClick={() => selectTedSize(item.size)}>
          {item.size}
        </button>
      );
    }
    return null;
  });

  return (
    <div className="product">
      <div>
        <img
          src={props.location.state.product.image}
          alt={props.location.state.product.name}
        />
      </div>

      <div className="product__price">
        <h1>{props.location.state.product.name}</h1>
        <p>{props.location.state.product.regular_price}</p>
        <p className="product__text">
          {props.location.state.product.installments}
        </p>
        <div className="product__size">
          <p className="product__text">Escolha o tamanho:</p>
          <p>{size}</p>
        </div>
        <div className="product__group">{groups}</div>
        <button
          className="product__add"
          onClick={() => handleAddCart(productCart)}
        >
          Adicionar no carrinho
        </button>
      </div>
    </div>
  );
}

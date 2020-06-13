import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Product({ product }) {
  return (
    <div className="card">
      <Link
        to={{
          pathname: `product/${product.code_color}`,
          state: { product },
        }}
      >
        <img
          src={
            product.image ? product.image : require('../../assets/sem_foto.png')
          }
          alt={product.name}
          style={{ width: '100%' }}
        />
        <div className="container">
          <h4>
            <b>{product.name}</b>
          </h4>
          <p>{product.regular_price}</p>
        </div>
      </Link>
    </div>
  );
}

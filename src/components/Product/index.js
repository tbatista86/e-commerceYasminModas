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
        <div className="card__container">
          <h4>
            <b>{product.name}</b>
          </h4>
          <div className="card__price">
            {product.on_sale ? (
              <div className="card__discount__body">
                <p className="card__discount">
                  -{product.discount_percentage}{' '}
                </p>

                <s>{product.regular_price}</s>
              </div>
            ) : null}
            <p>{product.actual_price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const searchItem = ({ product }) => {
  const sizes = product.sizes.map((size) => {
    if (size.available) {
      return <p className="search__size">{size.size}</p>;
    }
    return null;
  });

  return (
    <Link
      to={{
        pathname: `product/${product.code_color}`,
        state: { product },
      }}
    >
      <div className="search__content" key={product.code_color}>
        <div className="img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="search__detail">
          <h4>{product.name}</h4>
          <div className="search__sizes">
            <p>Tam.:</p> {sizes}
          </div>
        </div>
        <div className="search__price">
          <h4>{product.actual_price}</h4>
          <p>{product.installments}</p>
        </div>
      </div>
    </Link>
  );
};

export default searchItem;

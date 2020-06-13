import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/fetchActions';

import Product from '../../components/Product';

import './style.css';

export default function Home() {
  const [load, setLoad] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    setLoad(true);
  }, [dispatch]);

  if (!load) {
    return <div class="loader">Loading...</div>;
  }
  return (
    <div className="home">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

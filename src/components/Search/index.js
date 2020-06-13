import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchItem from '../SearchItem';

import arrow from '../../assets/icons/arrow-left.svg';
import './styles.css';

const Search = (props) => {
  const products = useSelector((state) => state.products);

  const [filter, setFilter] = useState([]);

  const handleFilter = (event) => {
    if (event.target.value === '') {
      setFilter([]);
      return;
    }

    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    );

    setFilter(filtered);
  };

  const mapFilter = filter.map((product) => <SearchItem product={product} />);

  return (
    <div className="search__drawer">
      <nav className="search__nav">
        <img src={arrow} alt="votar" className="search__icon" />
        <span>Buscar protudos</span>
      </nav>
      <div className="search__form">
        <form action="search">
          <input
            type="text"
            name="search"
            placeholder="Buscar por protudos"
            onChange={handleFilter}
          />
        </form>
      </div>
      {mapFilter}
    </div>
  );
};

export default Search;

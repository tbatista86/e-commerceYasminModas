import React, { Fragment, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Cart from '../components/Cart';
import Search from '../components/Search';
import Backdrop from '../components/Backdrop';

export default ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setCartOpen(!cartOpen);
  };

  const drawerToggleSearchClickHandler = () => {
    setSearchOpen(!searchOpen);
  };

  const backDropClickHandler = () => {
    setCartOpen(false);
    setSearchOpen(false);
  };

  return (
    <Fragment>
      <Header
        drawerClickHandler={drawerToggleClickHandler}
        drawerSearchClick={drawerToggleSearchClickHandler}
      />
      {cartOpen ? <Cart /> : null}
      {searchOpen ? <Search /> : null}
      {cartOpen || searchOpen ? (
        <Backdrop click={backDropClickHandler} />
      ) : null}
      {children}
      <Footer />
    </Fragment>
  );
};

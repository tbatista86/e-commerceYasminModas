import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:code_color" component={Product} />
      {/* <Redirect path="/" to="/home" /> */}
    </Switch>
  );
}

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';

export default function Pages() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/product/:code_color" component={Product} />
      <Redirect path="/" to="/home" />
    </Switch>
  );
}

import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './ducks/Produtos';
import cartReducer from './ducks/cart';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

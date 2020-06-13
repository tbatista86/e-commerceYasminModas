import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addCart = createAction('ADD_CART');
export const listProducts = createAction('LIST_PRODUCTS');

export default createReducer(INITIAL_STATE, {
  [addCart.type]: (state, action) => [...state, action.payload],
  [listProducts.type]: (state, action) => [...action.payload],
});

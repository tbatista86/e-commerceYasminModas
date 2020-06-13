import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');
export const filteredItem = createAction('FILTERED_ITEM');
export const updateQtdAddItem = createAction('UPDATE_QTD_ADD_ITEM');
export const updateQtdRemoveItem = createAction('UPDATE_QTD_REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => [...state, action.payload],
  [removeItem.type]: (state, action) =>
    state.filter((item) => item.code_color !== action.payload),
  [filteredItem.type]: (state, action) =>
    state.filter((item) => item.name === action.payload),
  [updateQtdAddItem.type]: (state, action) => {
    state.map((item) =>
      item.code_color === action.payload ? { ...item, qdt: ++item.qdt } : item
    );
  },
  [updateQtdRemoveItem.type]: (state, action) => {
    state.map((item) => {
      return item.code_color === action.payload && item.qdt > 1
        ? { ...item, qdt: --item.qdt }
        : item;
    });
    return state;
  },
});

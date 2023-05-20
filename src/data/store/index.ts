import { createStore, combineReducers } from 'redux';
import { cart } from './cart/reducer';

const rooReducer = combineReducers({
  cart
})

export const store = createStore(rooReducer)

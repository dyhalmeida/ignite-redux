import { createStore, combineReducers } from 'redux';
import { cart } from './cart/reducer';
import { ICartState } from './cart/interfaces/cart.interface';

export interface IState {
  cart: ICartState
}

const rooReducer = combineReducers({
  cart
})

export const store = createStore(rooReducer)

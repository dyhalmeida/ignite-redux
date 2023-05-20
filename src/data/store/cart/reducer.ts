import { Reducer } from "redux"
import { ICartState } from "./interfaces/cart.interface"

const initialState: ICartState = {
  items: []
}

export const cart: Reducer<ICartState> = () => {
  return initialState
}
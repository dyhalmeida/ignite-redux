import { Reducer } from "redux"
import { ICartState } from "./interfaces/cart.interface"

const initialState: ICartState = {
  items: []
}

export const cart: Reducer<ICartState> = (state = initialState, action) => {
  console.log(state, action)

  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload
      
      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1
          }
        ]
      }
    }
    default: {
      return state
    }
  }
}
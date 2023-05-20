import { Reducer } from "redux"
import { produce } from 'immer'
import { ICartState } from "./interfaces/cart.interface"

const initialState: ICartState = {
  items: []
}

export const cart: Reducer<ICartState> = (state = initialState, action) => {
  console.log(state, action)

  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload
        draft.items.push({
          product,
          quantity: 1
        })
        break
      }
      default: {
        return draft
      }
    }
  })
}

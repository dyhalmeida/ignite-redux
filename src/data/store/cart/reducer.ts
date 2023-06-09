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

        const productInCartIndex = draft.items
          .findIndex(item => item.product.id === product.id)

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }
        break
      }
      default: {
        return draft
      }
    }
  })
}

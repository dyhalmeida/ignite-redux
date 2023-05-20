import { useSelector } from 'react-redux'
import { IState } from '../../../data/store'
import { ICartItem } from '../../../data/store/cart/interfaces/item.interface'

export function Cart() {

  const items = useSelector<IState, ICartItem[]>(state => state.cart.items)

  return (
    <table style={{
      margin: '0 auto',
      width: '100%',
      maxWidth: '580px',
      marginTop: '3rem',
      border: '1px solid #ccc'
    }}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{item.product.price * item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
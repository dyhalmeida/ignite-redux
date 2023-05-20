import { useSelector } from 'react-redux'

export function Cart() {

  const state = useSelector(state => state)
  console.log(state)

  return (
    <table style={{
      width: '100%',
      marginTop: '3rem'
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

      </tbody>
    </table>
  )
}
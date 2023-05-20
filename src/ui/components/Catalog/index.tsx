import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useProducts } from '../../../data/hooks/useProducts'
import { addProductToCart } from '../../../data/store/cart/actions'
import { IProduct } from '../../../data/store/cart/interfaces/product.interface'

export function Catalog() {

  const { products } = useProducts()

  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch])


  return (
    <main style={{
      width: '100%',
      maxWidth: '380px',
      margin: '0 auto'
    }}>
      <h1>Catalog</h1>

      {products.map(product => (
        <article key={product.id} style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '1rem',
          padding: '0.5rem',
          gap: '1rem',
          border: '1px solid #ccc'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <strong>{product.title}</strong>
            <span>{product.price}</span>
          </div>

          <button
            type='button'
            onClick={() => handleAddProductToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}
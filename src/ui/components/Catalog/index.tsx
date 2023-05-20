import { useSelector } from 'react-redux'
import { useProducts } from '../../../data/hooks/useProducts'

export function Catalog() {

  const { products } = useProducts()

  const state = useSelector(state => state)


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

          <button type='button'>Comprar</button>
        </article>
      ))}
    </main>
  )
}
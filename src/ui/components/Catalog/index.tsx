import { useProducts } from '../../../data/hooks/useProducts'
import { CatalogItem } from '../CatalogItem'

export function Catalog() {

  const { products } = useProducts()

  return (
    <main style={{
      width: '100%',
      maxWidth: '380px',
      margin: '0 auto'
    }}>
      <h1>Catalog</h1>

      {products.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}
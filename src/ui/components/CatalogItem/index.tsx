import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { IProduct } from "../../../data/store/cart/interfaces/product.interface"
import { addProductToCart } from "../../../data/store/cart/actions"

interface ICatalogItemProps {
  product: IProduct
}
export function CatalogItem({ product }: ICatalogItemProps) {

  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])

  return (
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
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>
    </article>
  )
}
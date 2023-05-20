import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IProduct } from "../store/cart/interfaces/product.interface";

export function useProducts() {

  const [products, setProducts] = useState<IProduct[]>([])
  const [isFecthing, setIsFecthing] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('products')
        setProducts(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsFecthing(false)
      }
    })()
  }, [])

  return {
    products,
    isFecthing
  }

}
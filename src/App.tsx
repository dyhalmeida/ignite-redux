import { Provider } from 'react-redux'
import { store } from './data/store'
import { Catalog } from './ui/components/Catalog'
import { Cart } from './ui/components/Cart'

export function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}

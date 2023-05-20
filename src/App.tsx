import { Provider } from 'react-redux'
import { store } from './data/store'
import { Catalog } from './ui/components/Catalog'

export function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  )
}

import './index.css'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Sidebar from './components/Sidebar'
import { ProductProvider } from './context/ProductContext'

function App() {

  return (
    <ProductProvider>
    <div className='App'>
      <Header/>
      <div className='main'>
        <Sidebar/>
        <ProductsList/>
      </div>
    </div>
    </ProductProvider>
  )
}

export default App

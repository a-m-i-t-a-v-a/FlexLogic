import './index.css'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='App'>
      <Header/>
      <div className='main'>
        <Sidebar/>
        <ProductsList/>
      </div>
    </div>
  )
}

export default App

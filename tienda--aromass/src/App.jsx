
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importamos el CartProvider:
import { CartProvider } from './Context/CartContext';
//Envolver la aplicación con el CartProvider
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}  />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}  />
          <Route path='/item/:idItem' element={<ItemDetailContainer />}  />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App

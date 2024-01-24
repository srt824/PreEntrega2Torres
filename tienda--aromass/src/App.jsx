
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}></Route>
          <Route path='/item/:idItem' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

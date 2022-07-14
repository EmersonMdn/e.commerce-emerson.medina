import './App.css';
import {Routes, Route } from 'react-router-dom';
import Nav from './components/navBar/NavBar'; // Import NavBar component
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartDetail from './components/CartDetail/CartDetail';
import { CartContext, CartProvider} from './contex/cartContex';



function App() {
  return (
    <>
    <CartProvider>
      <Nav />
      <Routes>

        <Route exact path='/' element={<ItemListContainer greeting={'Inicio'} />} />

        <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={'Lista de productos'} />} />

        <Route exact path='/productos/:productId' element={<ItemDetailContainer />} />

        <Route exact path='/cart' element={<CartDetail/>} />

      </Routes>  
      <Footer />
      </CartProvider>
    </>
      
  );
}

export default App;
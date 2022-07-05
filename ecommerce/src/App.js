import './App.css';
import {Routes, Route } from 'react-router-dom';
import Nav from './components/navBar/NavBar'; // Import NavBar component
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetailContainer/ItemDetail/ItemDetail';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/productos/:productId' element={<ItemDetail />} />
      </Routes>  
      <Footer />
    </div>
      
  );
}

export default App;

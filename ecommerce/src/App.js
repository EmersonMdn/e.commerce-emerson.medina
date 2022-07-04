import './App.css';
import {Routes, Route, Router} from 'react-router-dom';
import Nav from './components/navBar/NavBar'; // Import NavBar component
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/detail' element={<ItemDetailContainer />} />
      </Routes>  
      <Footer />
    </div>
      
  );
}

export default App;

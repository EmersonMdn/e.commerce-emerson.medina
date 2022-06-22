import './App.css';
import Nav from './components/navBar/NavBar'; // Import NavBar component
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SliderProducts from './components/SliderProducts/SliderProducts';


function App() {
  return (
    <div>
      <Nav />
      <SliderProducts />
      <ItemListContainer />
    </div>
      
  );
}

export default App;

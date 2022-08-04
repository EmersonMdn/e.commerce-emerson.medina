import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/navBar/NavBar"; // Import NavBar component
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./contex/cartContex";
import CartDetailContainer from "./components/CartDetailContainer/CartDetailContainer";
import TicketDetail from "./components/TicketDetail/TicketDetail";

function App() {
  return (
    <>
      <CartProvider>
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting={"Inicio"} />}
          />

          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer greeting={"Lista de productos"} />}
          />

          <Route
            path="/productos/:productId"
            element={<ItemDetailContainer />}
          />

          <Route path="/cart" element={<CartDetailContainer />} />

          <Route path="/*" element={<ItemListContainer />} />

          <Route path='/ticket' element={<TicketDetail />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;

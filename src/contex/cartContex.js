import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addToCart = (product, count) => {
    if (isInCart(product.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === product.id) {
          element.cant += count;
        }
      }

      setCart(newCart);
    } else {
      setCart([...cart, { item: product, cant: count }]);
    }
    console.log(cart);
  };

  const isInCart = (id) => {
    return cart.find((elem) => elem.item.id === id);
  };

  const removeFromCart = (productId) => {
    const newCart = [...cart].filter(
      (element) => element.item.id !== productId
    );
    setCart(newCart);
    console.log("Eliminado");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = () => {
    let cantidad = 0;

    cart.forEach((element) => {
      cantidad += element.cant;
    });
    console.log(cantidad);
    return cantidad;
  };

  const getTotal = () => {
    let total = 0;

    cart.forEach((element) => {
      total += element.item.precio * element.cant;
    });
    // console.log(`Total: ${total}`);
    return total;
  };

  const contex = {
    cart,
    addToCart,
    clearCart,
    isInCart,
    removeFromCart,
    getQuantity,
    getTotal,
  };

  return <Provider value={contex}>{children}</Provider>;
};

// function CartContex() {
//     return ( <></> );
// }

// export default CartContex;

import Swal from "sweetalert2";

import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;

const alertOnCart = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1400,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Agregado al carrito",
  });
};

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [myUser, setMyUser] = useState(defaultValue);

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

    alertOnCart();
  };

  const isInCart = (id) => {
    return cart.find((elem) => elem.item.id === id);
  };

  const removeFromCart = (productId) => {
    const newCart = [...cart].filter(
      (element) => element.item.id !== productId
    );
    setCart(newCart);
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

  const getUserData = (user) => {
    setMyUser(user);
  };

  const contex = {
    cart,
    myUser,
    addToCart,
    clearCart,
    isInCart,
    removeFromCart,
    getQuantity,
    getTotal,
    getUserData,
  };

  return <Provider value={contex}>{children}</Provider>;
};

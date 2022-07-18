import { createContext, useState } from "react";

export const CartContext = createContext({});

const {Provider} = CartContext; 


export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);

    const addToCart = (product, count) => {
        
        if (isInCart(product.id)){
            const newCart = [...cart];
            for(const element of newCart){
                if(element.item.id === product.id){
                    element.cant += count;
                }
            }

            setCart(newCart);

        } else {
            setCart(
                [
                   ...cart,
                   {item: product,
                    cant: count}
                ]
            )
        } 
        console.log(cart);
    }

    const isInCart = (id) => {
        return cart.find(elem => elem.item.id === id);
    }

    const removeFromCart = (product, quantity) => {
        const newCart = [...cart].filter (item => item.item.id !== product.id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }


    const contex = {
        cart,
        addToCart,
        clearCart,
        isInCart,
        removeFromCart
    }

    return (
        <Provider value={contex}>
            {children}
        </Provider>
    )
}


// function CartContex() {
//     return ( <></> );
// }

// export default CartContex;
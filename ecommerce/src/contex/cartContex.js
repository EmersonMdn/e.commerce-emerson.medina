import { createContext, useState } from "react";

export const CartContext = createContext({});

const {Provider} = CartContext; 


export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);

    const addToCart = (product, quantity) => {
        
        if (isInCart(product.id)){
            const newCart = [...cart];
            for(const item of newCart){
                if(item.id === product.id){
                    item.count += quantity;
                }
            }
            setCart(newCart);

        } else {
            setCart(
                [
                    ...cart,
                    {
                        item: product,
                        quantity: quantity
                    }
                ]
            )
        } 
        
    }

    const removeFromCart = (product, quantity) => {
        const newCart = [...cart].filter (item => item.item.id !== product.id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (product) => {
        return cart.find(item => item.item.id === product.id);
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
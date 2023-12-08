import React, { useState, useContext, createContext } from 'react'

const Context = createContext();

export const StateContext = ({children}) => {  //почему мы передаем children, зачем 
    // const [add, setAdd] = useState([]);
    const [qty, setQty] = useState(1);
    const [cartItem, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, settotalQuantities] = useState(0)
    const [showCart, setShowCart] = useState(false)

    const incQty = () => {
        setQty((prevQty) => prevQty+1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1
            return prevQty-1
        })
    }

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItem.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

        settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        if(checkProductInCart) {
            const updateCartItems = cartItem.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
                
            });
            setCartItems(updateCartItems);
        }

        else {
            product.quantity = quantity

            setCartItems([ ...cartItem ,product])
        }

    }

    const toggleCartItemQuantity = (id, value) => {
        
    }

    return (
        <Context.Provider value={{
            qty,
            incQty,
            decQty,
            onAdd,
            showCart,
            setShowCart,
            cartItem,
            totalPrice,
            totalQuantities,
            setCartItems,
            settotalQuantities
        }}  >
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)
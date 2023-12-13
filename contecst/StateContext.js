import product from '@/sanityecommerce/schemas/product';
import React, { useState, useContext, createContext } from 'react'
import toast, { Toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {  //почему мы передаем children, зачем 
    // const [add, setAdd] = useState([]);
    const [qty, setQty] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, settotalQuantities] = useState(0)
    const [showCart, setShowCart] = useState(false)

    let foundProduct;
    let index; 

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
        const checkProductInCart = cartItems?.find((item) => item?._id === product?._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product?.price * quantity);

        settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        if(checkProductInCart) {
            const updateCartItems = cartItems.map((cartProduct) => {
                if(cartProduct?._id === product?._id) return {
                    ...cartProduct,
                    quantity: cartProduct?.quantity + quantity
                }
                
            });
            setCartItems(updateCartItems);
        }

        else {
            product.quantity = quantity

            setCartItems([ ...cartItems ,product])
        }

        toast.success(`${qty} ${product.name} added to the cart `)

    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id )

        const newCartItem = cartItems.filter((item) => (
            item._id !=id
         ) )

        if(value === 'inc') {
            setCartItems([...newCartItem, {...foundProduct, quantity: foundProduct.quantity+1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price )
            settotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1 )
        }
        else if(value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItem, {...foundProduct, quantity: foundProduct.quantity-1}])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price )
                settotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1 )
            }
        }
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id )

        const newCartItem = cartItems.filter((item) => item._id !== product._id)
        setCartItems(newCartItem)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity )
        settotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity )
    }

    return (
        <Context.Provider value={{
            qty,
            incQty,
            decQty,
            onAdd,
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            setCartItems,
            setTotalPrice,
            settotalQuantities,
            toggleCartItemQuantity,
            onRemove
        }}  >
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)
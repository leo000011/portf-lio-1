import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { dummyProducts } from "../assets/greencart_assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const currency = import.meta.VITE_CURRENCY

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])

    const [cartItems, setCartItems] = useState({})
    
    const fetchProduct = async () => {
        setProducts(dummyProducts)
    }

    const addToCart = () => {
        let cartData = structuredClone(cartItems)

        if(cartData[itemsId]) {
            cartData[itemsId] += 1
        } else {
            cartData[itemsId] = 1
        }

        setCartItems(cartData);
        toast.sucess("added to cart")
    }

    // update Cart Item Quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity;
        setCartItems(cartData)
        toast.secess("Cart Updated")
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    const value = {navigate, user, setUser, isSeller, setIsSeller, showUserLogin,
         setShowUserLogin, products, currency, addToCart, updateCartItem}

    return(
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext)
}
/* eslint-disable react/prop-types */
import{useState,useEffect,createContext,useContext}from'react'

const cartContext=createContext()

export const{Provider}=cartContext

export const useCartContext=()=>{
    return useContext(cartContext)
}

const CartContextProvider=({children})=>{
    const contextValue={
        titulo:'Editorial Mar Negro'
    }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartContextProvider
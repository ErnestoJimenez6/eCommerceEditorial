/* eslint-disable react/prop-types */
import{useState,useEffect,createContext,useContext}from'react'

const cartContext=createContext()

export const{Provider}=cartContext

export const useCartContext=()=>{
    return useContext(cartContext)
}

const CartContextProvider=({children})=>{
    const[qtyItems,setQtyItems]=useState(0)
    const[cart,setCart]=useState([])
    const[total,setTotal]=useState(0)

    useEffect(()=>{
        const localCart=JSON.parse(localStorage.getItem('cart'))
        const localTotal=JSON.parse(localStorage.getItem('total'))
        const localQty=JSON.parse(localStorage.getItem('qty'))

        if(localCart&&localTotal&&localQty){
            setCart(localCart)
            setTotal(localTotal)
            setQtyItems(localQty)
        }
    },[])


    const isInCart=(id)=>{
        return cart.find((elem)=>
            elem.id===id
        )
    }

    const addToCart=(item,qty)=>{
        const newCart=isInCart(item.id)
        ?cart.map(elem=>
            elem.id===item.id
            ?{...elem,qty:elem.qty+qty}:elem
        )
        :[...cart,{...item,qty}]

        setCart(newCart)
        setTotal(prevTotal=>prevTotal+item.price*qty)
        setQtyItems(prevQty=>prevQty+qty)

        localStorage.setItem('cart',JSON.stringify(newCart))
        localStorage.setItem('total',JSON.stringify(total+item.price*qty))
        localStorage.setItem('qty',JSON.stringify(qtyItems+qty))
    }

    const removeItem=(id,price,qty)=>{
        setTotal(total-price*qty)
        setQtyItems(qtyItems-qty)

        const newCart=cart.filter((elem)=>
            elem.id !== id
        )

        setCart(newCart)
        localStorage.setItem('cart',JSON.stringify(newCart))
        localStorage.setItem('total',JSON.stringify(total))
        localStorage.setItem('qty',JSON.stringify(qty))
    }

    const clearCart=()=>{
        setCart([])
        setTotal(0)
        setQtyItems(0)
        localStorage.removeItem('cart')
        localStorage.removeItem('total')
    }

    const contextValue={
        titulo:'Editorial Mar Negro',
        qtyItems,
        total,
        cart,
        addToCart,
        clearCart,
        removeItem
    }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartContextProvider
/* eslint-disable react/prop-types */
import'./ItemCount.css'
import{useState}from'react'
import Button from'react-bootstrap/Button'
import{useNavigate}from'react-router-dom'

const ItemCount=({stock,initial,handleOnBuy})=>{
    const navigate=useNavigate()
    const[qty,setQty]=useState(initial)
    const[itemAdded,SetItemAdded]=useState(false)

    const handleClick=(op)=>{
        op==='-'?clickMenos():clickMas()
    }

    const clickMenos=()=>{
        if(qty===1){
            alert('No se puede seleccionar menos de un producto')
            return
        }
        setQty(qty-1)
    }

    const clickMas=()=>{
        if(qty===stock){
            alert('No hay más stock')
            return
        }
        setQty(qty+1)
    }

    const handleAddToCart=()=>{
        handleOnBuy(qty)
        SetItemAdded(true)
    }

    const handleGoToCheckout=()=>{
        SetItemAdded(false)
        navigate('/cart')
    }

    return(
        <>
            {itemAdded?(
                <Button variant='primary' className='btn' onClick={handleGoToCheckout}>Checkout</Button>
            ):(
                <>
                    <div className='item-count'>
                        <button onClick={()=>handleClick('-')}>
                            -
                        </button>
                        <span>{qty}</span>
                        <button onClick={()=>handleClick('+')}>
                            +
                        </button>
                    </div>
                    <Button variant='primary' className='btn' onClick={handleAddToCart}>Agregar al carrito</Button>
                </>
            )}
        </>
    )
}

export default ItemCount
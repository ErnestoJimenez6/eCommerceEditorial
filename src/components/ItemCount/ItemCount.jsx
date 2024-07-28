/* eslint-disable react/prop-types */
import'./ItemCount.css'
import{useState}from'react'

const ItemCount=({stock,initial})=>{
    const[qty,setQty]=useState(initial)

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

    return(
        <div className="item-count">
            <button onClick={()=>handleClick('-')}>-</button>
            <span>{qty}</span>
            <button onClick={()=>handleClick('+')}>+</button>
        </div>
    )
}

export default ItemCount
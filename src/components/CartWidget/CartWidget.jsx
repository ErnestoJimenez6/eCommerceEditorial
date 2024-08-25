import{useCartContext}from'../../context/CartContext'
import{useNavigate}from'react-router-dom'

const CartWidget=()=>{
    const{qtyItems}=useCartContext()
    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate('/cart')
    }

    return(
        <div className='cart-widget d-flex p-2' onClick={handleNavigate} style={{cursor:'pointer'}}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='bi bi-cart3 me-2' viewBox='0 0 16 16'>
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2'/>
            </svg>
            <span className="badge bg-secondary">{qtyItems}</span>
        </div>
    )
}

export default CartWidget
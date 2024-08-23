import{useCartContext}from'../../context/CartContext'
import{Table}from'react-bootstrap'

const Cart=()=>{
    const{cart,total,removeItem,clearCart}=useCartContext()
    
    const handleRemoveItem=(id,price,qty)=>{
        removeItem(id,price,qty)
    }

    const handleClearCart=()=>{
        clearCart()
    }

    return(
        <>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Autor</th>
                        <th>Género</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map(({id,name,author,price,category,qty},index)=>{
                        return(
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{author}</td>
                                <td>{category}</td>
                                <td>{price}</td>
                                <td>{qty}</td>
                                <td>
                                    <button onClick={()=>handleRemoveItem(id,price,qty)}>
                                        Eliminar Item
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={4}>Total</td>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </Table>
            <button onClick={handleClearCart}>Limpiar carrito</button>
        </>
    )
}

export default Cart
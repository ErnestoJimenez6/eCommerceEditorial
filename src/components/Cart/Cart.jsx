import{useCartContext}from'../../context/CartContext'
import{Table}from'react-bootstrap'
import{useState}from'react'
import{addDoc,collection}from'firebase/firestore'
import{db}from'../../firebase/dbConection'
import'./Cart.css'

const Cart=()=>{
    const{cart,total,removeItem,clearCart}=useCartContext()
    const[formData,SetFormData]=useState({name:'',tel:'',email:''})

    const handleRemoveItem=(id,price,qty)=>{
        removeItem(id,price,qty)
    }

    const handleClearCart=()=>{
        clearCart()
    }

    const handleOnChange=(e)=>{
        SetFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const handleSaveCart=()=>{
        console.log('Saving in database')
        console.log('formData',formData)
        console.log('cart',cart)

        const ordersCollection=collection(db,'orders')
        const newOrder={
            buyer:formData,
            items:cart,
            date:new Date(),
            total:total
        }

        addDoc(ordersCollection,newOrder)
            .then((doc)=>{
                alert('Orden guardada con el Id: '+doc.id)
                console.log('Orden guardada con el id: '+doc.id)
                clearCart()
                SetFormData({name:'',tel:'',emai:''})
            })
            .catch((error)=>{
                console.error('Error al agregar el documento: ',error)
            })
    }

    return(
        <div className='cart-container'>
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
                    {cart?.map(({id,name,author,category,price,qty},index)=>{
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
            <button onClick={handleClearCart}>Limpiar carrito </button>

            <input type='text' name='name' id='name' placeholder='ingrese su nombre' onChange={(e)=>handleOnChange(e)}/>
            <input type='number' name='tel' id='tel' placeholder='ingrese su teléfono' onChange={(e)=>handleOnChange(e)}/>
            <input type='email' name='email' id='email' placeholder='ingrese su email'  onChange={(e)=>handleOnChange(e)}/>
            <button onClick={handleSaveCart}>Finalizar Compra</button>
        </div>
    )
}

export default Cart
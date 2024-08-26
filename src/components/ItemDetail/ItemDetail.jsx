/* eslint-disable react/prop-types */
import Card from'react-bootstrap/Card'
import ItemCount from'../ItemCount/ItemCount'
import{useCartContext}from'../../context/CartContext'

const ItemDetail=({id,name,author,description,price,stock,image})=>{
    const{addToCart}=useCartContext()

    const handleOnBuy=(qty)=>{
        console.log(`Se agregaron ${qty} productos al carrito`)
        const item={id,name,author,description,price}
        addToCart(item,qty)
    }

    return(
        <Card className='h-100 text-bg-dark text-center'>
            <Card.Img variant='top' src={image} alt={name} className='card-img-top'/>
            <Card.Body>
                <Card.Title className='card-title text-center'>
                    {name}
                </Card.Title>
                <Card.Text className='card-text text-center'>
                    {author}
                </Card.Text>
                <Card.Text className='card-text text-center'>
                    {description}
                </Card.Text>
                <Card.Text className='card-text text-center'>
                    ${price}
                </Card.Text>
                <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy}/>
            </Card.Body>
            <Card.Footer className='text-muted'>
                Solo quedan {stock}
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail
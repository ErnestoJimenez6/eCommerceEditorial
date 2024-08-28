/* eslint-disable react/prop-types */
import Card from'react-bootstrap/Card'
import Row from'react-bootstrap/Row'
import Col from'react-bootstrap/Col'
import ItemCount from'../ItemCount/ItemCount'
import{useCartContext}from'../../context/CartContext'
import'./ItemDetail.css'

const ItemDetail=({id,name,author,category,description,price,stock,image})=>{

    const{addToCart}=useCartContext()

    const handleOnBuy=(qty)=>{
        console.log(`Se agregaron ${qty} productos al carrito`)
        const item={id,name,author,category,description,price}
        addToCart(item,qty)
    }

    return(
        <div className='d-flex justify-content-center align-items-center my-container'>
            <Row className='align-items-stretch w-100'>
                <Col lg={4} md={5} sm={6} xs={12} className='mb-4'>
                    <div className='image-container  d-flex align-items-center h-100'>
                        <Card.Img variant='top' src={image} alt={name} className='img-fluid'/>
                    </div>
                </Col>
                <Col lg={8} md={7} sm={6} xs={12} className='mb-4'>
                    <Card className='text-bg-dark h-100'>
                        <Card.Body className='d-flex flex-column justify-content-center'>
                            <Card.Title className='card-title text-center'>
                                {name}
                            </Card.Title>
                            <Card.Text className='card-text'>
                                {author}
                            </Card.Text>
                            <Card.Text className='card-text'>
                                {category}
                            </Card.Text>
                            <Card.Text className='card-text text-justify'>
                                {description}
                            </Card.Text>
                            <Card.Text className='card-text'>
                                ${price}
                            </Card.Text>
                            <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ItemDetail
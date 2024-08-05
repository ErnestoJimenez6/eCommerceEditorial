/* eslint-disable react/prop-types */
import'./Item.css'
import{Link}from'react-router-dom'
import Card from'react-bootstrap/Card'
import Button from'react-bootstrap/Button'
import Col from'react-bootstrap/Col'

const Item=({product})=>{
    return(
        <>

            <Col md={4} className='mb-4'>
                <Card className='h-100 text-bg-dark border-danger'>
                    <Card.Img variant='top' src={product.image} alt={product.name} className='card-img-top'/>
                    <Card.Body>
                        <Card.Title className='card-title text-center'>{product.name}</Card.Title>
                        <Card.Text className='card-text text-center'>{product.author}</Card.Text>
                        <Card.Text className='card-text text-center'>{product.category}</Card.Text>
                        <Card.Text className='card-text text-center'>${product.price}</Card.Text>
                        <div className='text-center'>
                            <Link to='#'>
                                <Button variant='primary' className='btn'>COMPRAR</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item
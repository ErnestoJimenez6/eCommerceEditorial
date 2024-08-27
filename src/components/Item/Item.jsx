/* eslint-disable react/prop-types */
import'./Item.css'
import{Link}from'react-router-dom'
import Card from'react-bootstrap/Card'
import Button from'react-bootstrap/Button'
import Col from'react-bootstrap/Col'

const Item=({product})=>{
    return(
        <>
            <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
                <Card className='h-100 text-bg-dark'>
                    <Card.Img variant='top' src={product.image} alt={product.name} className='card-img-top'/>
                    <Card.Body className='card-body'>
                        <Card.Title className='card-title text-center'>
                            {product.name}
                        </Card.Title>
                        <Card.Text className='card-text text-center'>
                            {product.author}
                        </Card.Text>
                        <Card.Text className='card-text text-center'>
                            {product.category}
                        </Card.Text>
                        <Card.Text className='card-text text-center'>
                            ${product.price}
                        </Card.Text>
                        <div className='text-center'>
                            <Link to={`/product/${product.id}`}>
                                <Button variant='primary' className='btn'>
                                    Ver
                                </Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item
/* eslint-disable react/prop-types */
import Button from'react-bootstrap/Button'
import Card from'react-bootstrap/Card'

const ItemDetail=({name,author,description,price,category,stock,image})=>{

    return(
        <Card className='h-100 text-bg-dark border-danger'>
            <Card.Img variant='top' src={image} alt={name} className='card-img-top'/>
            <Card.Body>
                <Card.Title className='card-title text-center'>{name}</Card.Title>
                <Card.Text className='card-text text-center'>{author}</Card.Text>
                <Card.Text className='card-text text-center'>{category}</Card.Text>
                <Card.Text className='card-text text-center'>{description}</Card.Text>
                <Card.Text className='card-text text-center'>${price}</Card.Text>
                <Button variant='primary' className='btn'>COMPRAR</Button>
            </Card.Body>
            <Card.Footer className='text-muted'>Solo quedan {stock}</Card.Footer>
        </Card>
    )
}

export default ItemDetail
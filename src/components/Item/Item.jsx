/* eslint-disable react/prop-types */
import'./Item.css'
{/*import{Card,Button}from'react-bootstrap'*/}

const Item=({product})=>{
    return(
        <>

            {/*<Card style={{width:'18rem'}}>
                <Card.Img variant='top' src={product.image} alt={product.name}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.author}</Card.Text>
                    <Card.Text>{product.genre}</Card.Text>
                    <Card.Text>{product.decription}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant='primary'>COMPRAR</Button>
                </Card.Body>
            </Card>*/}

            <div className='col-md-4 mb-4'>
                <div className='card h-100 text-bg-dark border-danger'>
                    <img src={product.image} className='card-img-top' alt={product.name}/>
                    <div className='card-body'>
                        <h2 className='card-title text-center'>{product.name}</h2>
                        <p className='card-text text-center'>{product.author}</p>
                        <p className='card-text text-center'>{product.decription}</p>
                        <p className='card-text text-center'>{product.genre}</p>
                        <p className='card-text text-center'>{product.price}</p>
                        <div className='text-center'>
                            <a href='#' className='btn btn-primary'>COMPRAR</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
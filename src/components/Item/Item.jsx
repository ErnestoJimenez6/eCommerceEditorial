import'./Item.css'/* eslint-disable react/prop-types */


const Item=({product})=>{
    return(
        <>
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
/* eslint-disable react/prop-types */
import'./Item.css'

const Item=({product})=>{
    return(
        <>
            <div className='item'>
                <img src={product.image} alt=''/>
                <div>{product.name}</div>
                <div>{product.author}</div>
                <div>{product.decription}</div>
                <div>{product.genre}</div>
                <div>{product.price}</div>
            </div>
        </>
    )
}

export default Item
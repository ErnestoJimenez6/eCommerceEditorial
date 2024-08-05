/* eslint-disable react/prop-types */
import Item from'../Item/Item'

const ItemList=({products})=>{
    return(
        <>
            <div className='row justify-content-center align-items-stretch'>
                {products.map(product=>{
                    return<Item key={product.id} product={product}/>
                })}
            </div>
        </>
    )
}

export default ItemList
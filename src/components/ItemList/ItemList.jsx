/* eslint-disable react/prop-types */
import Item from'../Item/Item'
import'./ItemList.css'

{/* const ItemList=({genre})=>{
    const filteredProducts=products.filter(product=>product.genre.includes(genre))

    return(
        <div className='item-list'>
            <h2>Libros de la categoría:{genre}</h2>
            {filteredProducts.map(product=>(
                <Item key={product.id} product={product}/>
            ))}
        </div>
    )
} */}

const ItemList=({products,genre})=>{

    let filteredProducts=products

    if(genre){
        filteredProducts=products.filter(product=>product.genre&&product.genre.includes(genre))
    }

    if(!filteredProducts||filteredProducts.length===0){
        return<div>No hay productos disponibles.</div>
    }

    return(
        <>
            <div className='item-list'>
                {genre?<h2>Libros de la categoría: {genre}</h2>: <div>Libros</div>}
                {filteredProducts.map(product=>{
                    return<Item key={product.id} product={product}/>
                })}
            </div>
        </>
    )
}

export default ItemList
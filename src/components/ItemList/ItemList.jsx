/* eslint-disable react/prop-types */
import Item from'../Item/Item'
import'./ItemList.css'

const ItemList=({items,genre})=>{

    let filteredItems=items

    if(genre){
        filteredItems=items.filter(product=>product.genre&&product.genre.includes(genre))
    }

    if(!filteredItems||filteredItems.length===0){
        return<div>No hay libros disponibles.</div>
    }

    return(
        <>
            <div className='item-list'>
                {genre?<h2>Libros de {genre}</h2>:<div/>}
                {filteredItems.map(product=>{
                    return<Item key={product.id} product={product}/>
                })}
            </div>
        </>
    )
}

export default ItemList
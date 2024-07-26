import Item from'../Item/Item'
import{products}from'../../mock/mockData'
import'./ItemList.css'

const ItemList=({category})=>{
    const filteredProducts=products.filter(product=>product.category.includes(category))

    return(
        <div className='item-list'>
            <h2>Productos de la categoría:{category}</h2>
            {filteredProducts.map(product=>(
                <Item key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ItemList
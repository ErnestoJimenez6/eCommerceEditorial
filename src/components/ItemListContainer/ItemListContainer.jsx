/* eslint-disable react/prop-types */
import ItemList from'../ItemList/ItemList'
import'./ItemListContainer.css'
import{products}from'../../mock/mockData'

const ItemListContainer=({title})=>{

    // const products=[]

    return(
        <>
            <div className='item-list-container'>
                <div>{title}</div>
                <ItemList products={products}/>
            </div>
        </>
    )
}

export default ItemListContainer
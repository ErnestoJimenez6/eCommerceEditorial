/* eslint-disable react/prop-types */
import ItemList from'../ItemList/ItemList'
import'./ItemListContainer.css'

const ItemListContainer=({title})=>{

    // const products=[]

    return(
        <>
            <div className='item-list-container'>
                <div>{title}</div>
                <ItemList/>
            </div>
        </>
    )
}
export default ItemListContainer
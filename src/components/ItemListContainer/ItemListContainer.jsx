import ItemCuont from'../ItemCount/ItemCount'
import ItemList from'../ItemList/ItemList'
import'./ItemListContainer.css'

const ItemListContainer=({title})=>{
    return(
        <>
            <div className='item-list-container'>
                <div>{title}</div>
                <ItemList />
                <ItemCuont stock={10} initial={1}/>
            </div>
        </>
    )
}
export default ItemListContainer
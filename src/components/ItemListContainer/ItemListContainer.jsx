import ItemCuont from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer=({title})=>{
    return(
        <>
            <div>{title}</div>
            <ItemList />
            <ItemCuont stock={10} initial={1}/>
        </>
    )
}

export default ItemListContainer
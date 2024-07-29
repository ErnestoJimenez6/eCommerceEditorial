/* eslint-disable react/prop-types */
import{useState,useEffect}from'react'
import ItemList from'../ItemList/ItemList'
import'./ItemListContainer.css'
import{getProducts}from'../../utils/fetchData'

const ItemListContainer=({title})=>{
    const[products,setProducts]=useState([])
    const[genre,setGenre]=useState('Ciencia Ficción')

    useEffect(()=>{
        console.log('Se montó el componente')
        getProducts(genre)
            .then((res)=>{
                console.log('Se resolvió la promesa')
                setProducts(res)
                console.log('Se atualizaron los productos')
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                console.log('Finalizó la promesa')
            })
    },[genre])

    return(
        <>
            <button onClick={()=>
                setGenre('Fantasía')
            }>Fantasía</button>
            <button onClick={()=>
                setGenre('Terror')
            }>Terror</button>
            <div className='item-list-container'>
                <div>{title}</div>
                <ItemList items={products} genre={genre}/>
            </div>
        </>
    )
}

export default ItemListContainer
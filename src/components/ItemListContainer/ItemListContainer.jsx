/* eslint-disable react/prop-types */
import{useState,useEffect}from'react'
import ItemList from'../ItemList/ItemList'
import{getProducts}from'../../utils/fetchData'
import{useParams}from'react-router-dom'

const ItemListContainer=({title})=>{
    const[products,setProducts]=useState([])
    //const[category,setCategory]=useState('Ciencia Ficción')
    const{categoryId}=useParams()

    useEffect(()=>{
        console.log('Se montó el componente')
        getProducts(categoryId)
            .then((res)=>{
                console.log('Se resolvió la promesa')
                setProducts(res)
                console.log('Se atualizaron los productos')
            })
            .catch((err)=>{
                console.error('Error al obtener productos:',err)
            })
            .finally(()=>{
                console.log('Finalizó la promesa')
            })
    },[categoryId])

    return(
        <>
            {/*<button onClick={()=>
                setCategory('Ciencia Ficción')
            }>Ciencia Ficción</button>
            <button onClick={()=>
                setCategory('Fantasía')
            }>Fantasía</button>
            <button onClick={()=>
                setCategory('Terror')
            }>Terror</button>
            <div className='container'>
                <div>{title}</div>
                <ItemList items={products} category={category}/>
            </div>*/}
        </>
    )
}

export default ItemListContainer
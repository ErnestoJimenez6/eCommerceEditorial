/* eslint-disable react/prop-types */
import{useState,useEffect}from'react'
import ItemList from'../ItemList/ItemList'
import{getProducts}from'../../utils/fetchData'
import{useParams}from'react-router-dom'
import Spinner from'../Spinner/Spinner'

const ItemListContainer=({title})=>{
    const[products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const{categoryId}=useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts(categoryId)
            .then((res)=>{
                setProducts(res)
            })
            .catch((err)=>{
                console.error('Error al obtener productos:',err)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[categoryId])

    return(
        <main>
            <div>{title}</div>
            {loading?<Spinner/>:<ItemList products={products}/>}
        </main>
    )
}

export default ItemListContainer
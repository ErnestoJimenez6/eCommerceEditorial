/* eslint-disable react/prop-types */
import{useState,useEffect}from'react'
import{collection,getDocs,query,where}from'firebase/firestore'
import{db}from'../../firebase/dbConection'
import{useCartContext}from'../../context/CartContext'
import ItemList from'../ItemList/ItemList'
import{useParams}from'react-router-dom'
import Spinner from'../Spinner/Spinner'
import'./ItemDetailContainer.css'

const ItemListContainer=()=>{
    const[products,setProducts]=useState([])
    const{categoryId}=useParams()
    const[loading,setLoading]=useState(true)
    const{titulo}=useCartContext()

    let title=titulo

    useEffect(()=>{
        setLoading(true)
        
        let productsCollection=collection(db,'productos')

        if(categoryId){
            productsCollection=query(productsCollection,where('category','array-contains',categoryId))
        }

        getDocs(productsCollection)
        .then(({docs})=>{
            const prodFromDocs=docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            setProducts(prodFromDocs)
            setLoading(false)
        })
        .catch((error)=>{
            console.error('Error getting docmuents: ',error)
        })
    },[categoryId])

    return(
        <main>
            <div className='title'>{title}</div>
            {loading?<Spinner/>:<ItemList products={products}/>}
        </main>
    )
}

export default ItemListContainer
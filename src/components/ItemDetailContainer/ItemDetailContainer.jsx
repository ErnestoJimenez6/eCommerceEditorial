import{useEffect,useState}from'react'
import{useParams}from'react-router-dom'
import ItemDetail from'../ItemDetail/ItemDetail'
import{Spinner}from'react-bootstrap'
import{db}from'../../firebase/dbConection'
import{collection,getDoc,doc}from'firebase/firestore'

const ItemDetailContainer=()=>{
    const[product,setProduct]=useState({})
    const[loading,setLoading]=useState(true)
    const{id}=useParams()

    useEffect(()=>{
        setLoading(true)
        const productCollection=collection(db,'productos')
        const refDoc=doc(productCollection,id)

        getDoc(refDoc)
        .then((doc)=>{
            setProduct({id:doc.id,...doc.data()})
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log('Error cargando el producto: ',error)
        })
    },[id])
    
    return(
        <main>
            {loading
                ?<Spinner/>
                :<ItemDetail {...product}/>}
        </main>
    )
}

export default ItemDetailContainer
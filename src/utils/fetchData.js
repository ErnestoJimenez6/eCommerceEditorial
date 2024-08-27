import{collection,getDocs,doc,getDoc}from'firebase/firestore'
import{db}from'./firebase'

export const getProducts=async(category)=>{

    try{
        const querySnapshot=await getDocs(collection(db,'productos'))
        let filteredItems=querySnapshot.docs.map(doc=>{
            const data=doc.data()
            return{
                id:doc.id,
                ...data
            }
        })

        if(category){
            filteredItems=filteredItems.filter(item=>
                item.category.includes(category)
            )
        }

        return filteredItems
    }catch(error){
        throw new Error('No hay productos disponibles para este género')
    }
}

export const getProductById=async(id)=>{
    try{
        const docRef=doc(db,'productos',id)
        const docSnap=await getDoc(docRef)

        if(docSnap.exists()){
            return{id:docSnap.id,...docSnap.data()}
        }else{
            throw new Error('No se encuentra el producto')
        }
    }catch(error){
        throw new Error('No se encuentra el producto')
    }
}

{/*import{items}from'../mock/mockData'

export const getProducts=(category)=>{
        
    let filteredItems=[...items]
    
    if(category){
        filteredItems=items.filter((item)=>
            item.category.includes(category)
        )
    }
    
    return new Promise((resolve,reject)=>{
        if(items.length>0){
            setTimeout(()=>{
                resolve(filteredItems)
            },1000)
        }else{
            reject('No hay productos disponibles para este género')
        }
    })
}

export const getProductById=(id)=>{

    return new Promise((resolve,reject)=>{
        const product=items.find((item)=>item.id===parseInt(id))
        setTimeout(()=>{
            if(product){
                resolve(product)
            }else{
                reject('No se encuentra el producto')
            }
        },1000)
    })
}*/}
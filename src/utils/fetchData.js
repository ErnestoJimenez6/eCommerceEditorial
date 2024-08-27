import{items}from'../mock/mockData'
import{getImageURL}from'../utils/fetchImages'

export const getProducts=async(category)=>{
        
    let filteredItems=[...items]
    
    if(category){
        filteredItems=items.filter((item)=>
            item.category.includes(category)
        )
    }

    for(let item of filteredItems){
        item.image=await getImageURL(item.image)
    }
    
    return new Promise((resolve,reject)=>{
        if(filteredItems.length>0){
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
}

import{items}from'../mock/mockData'
import{getImageURL}from'../utils/fetchImages'

export const getProducts=async(category)=>{
    
    let filteredItems=category?items.filter(item=>
        item.category.includes(category)
    )
    :items

    for(let item of filteredItems){
        item.image=await getImageURL(item.image)
    }

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            filteredItems.length>0?resolve(filteredItems)
            :reject('No hay productos disponibles para este género')
        },1000)
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
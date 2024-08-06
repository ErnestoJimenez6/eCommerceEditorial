import{items}from'../mock/mockData'

export const getProducts=(category)=>{

    let filteredItems=[...items]

    if(category){
        filteredItems=items.filter((item)=>
            item.category==category
        )
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
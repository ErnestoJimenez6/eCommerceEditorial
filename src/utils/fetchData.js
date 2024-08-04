import{items}from'../mock/mockData'

export const getProducts=(genre)=>{
    const filteredItems=items.filter((item)=>
        item.genre==genre
    )

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
import{getStorage,ref,getDownloadURL}from'firebase/storage'

const storage=getStorage()

export const getImageURL=async(imagePath)=>{
    try{
        const imageRef=ref(storage,imagePath)
        const url=await getDownloadURL(imageRef)
        return url
    }catch(error){
        console.error('Error al obtener la URL de la imagen:',error)
        return null
    }
}
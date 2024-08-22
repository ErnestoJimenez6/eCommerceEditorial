import'./AboutUs.css'
import{useCartContext}from'../../context/CartContext'

const AboutUs=()=>{
    const{titulo}=useCartContext()

    return (
        <>
            <h1 className='tituloDePag'>Sobre {titulo}</h1>

            <section className='AboutUs'>
                <div>
                    <p className='Txt1'>Mar Negro es una editorial independiente que busca habitar la parte oscura y oculta de la rutina.</p>
                    <p className='Txt2'>Especializada en Ciencia Ficción, Fantasía y Terror, queremos que la mente del lector se ensanche hasta lo indecible.</p>
                    <p className='Txt3'>Todo bajo un mismo sello que supone una forma de entender la cultura.</p>
                </div>
            </section>
        </>
    )
}

export default AboutUs
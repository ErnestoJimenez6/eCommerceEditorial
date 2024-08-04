import'./AboutUs.css'

const AboutUs=()=>{
    return (
        <>
            <h1 className='tituloDePag'>About us</h1>
            <section>
                <div className='gridContainer'>
                    <img className='gridImg1' src='img1.jpg' alt='Img1'/>
                    <p className='gridTxt1'>Mar Negro es una editorial independiente que busca habitar la parte oscura y oculta de la rutina.</p>
                    <p className='gridTxt2'>Especializada en terror, weird y literatura oscura, queremos que la mente del lector se ensanche hasta lo indecible.</p>
                    <img className='gridImg2' src='img2.jpg' alt='img2'/>
                    <img className='gridImg3' src='img3.jpg' alt='img3'/>
                    <p className='gridTxt3'>Todo bajo un mismo sello que supone una forma de entender la cultura.</p>
                </div>
            </section>
        </>
    )
}

export default AboutUs
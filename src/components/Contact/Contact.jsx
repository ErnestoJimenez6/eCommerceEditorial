import'./Contact.css'

const Contact=()=>{
    return(
        <>
            <h1 className='tituloDePag'>Contact</h1>

            <p className='contactoTexto'>Si tenés alguna pregunta sobre nuestros libros o cualquier otra duda, envianos un correo electrónico completando el siguiente formulario.</p>
            <div className='contacto-container'>
                <div className='iframe-container'>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14111.604656532347!2d-64.26194608211519!3d-27.843575263133356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDUwJzM2LjkiUyA2NMKwMTUnMTEuNSJX!5e0!3m2!1ses-419!2sar!4v1699143766274!5m2!1ses-419!2sar" width="600" height="450" style="border:0;' allowfullscreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'/>
                </div>
                <div className='formContainer'>
                    <form>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type='text' id='nombre'/>
                        <label htmlFor='apellido'>Apellido</label>
                        <input type='text' id='apellido'/>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'/>
                        <label htmlFor='mensaje'>Mensaje</label>
                        <textarea name='' id='' cols='30' rows='10' placeholder='Deje su mensaje'></textarea>
                        <input className='btnFormulario' type='submit'/>
                        <input className='btnFormulario' type='reset'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
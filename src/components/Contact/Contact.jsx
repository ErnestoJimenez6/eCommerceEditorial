import'./Contact.css'
import Form from'react-bootstrap/Form'
import Button from'react-bootstrap/Button'
import Container from'react-bootstrap/Container'
import{useCartContext}from '../../context/CartContext'

const Contact=()=>{
    const {titulo}=useCartContext()

    return(
        <>
            <Container>
                <h1 className='tituloDePag'>Contacto de {titulo}</h1>
                <p className='contactoTexto'>
                    Si tenés alguna pregunta sobre nuestros libros o cualquier otra duda, envianos un correo electrónico completando el siguiente formulario.
                </p>
                <div className='contacto-container'>
                    <div className='iframe-container'>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14111.604656532347!2d-64.26194608211519!3d-27.843575263133356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDUwJzM2LjkiUyA2NMKwMTUnMTEuNSJX!5e0!3m2!1ses-419!2sar!4v1699143766274!5m2!1ses-419!2sar' width='600' height='450' style={{border:0}} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'/>
                    </div>
                    <div className='formContainer'>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='nombre'>Nombre</Form.Label>
                                <Form.Control type='text' id='nombre' placeholder='Ingrese su nombre' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='apellido'>Apellido</Form.Label>
                                <Form.Control type='text' id='apellido' placeholder='Ingrese su apellido' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control type='email' id='email' placeholder='Ingrese su email' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='mensaje'>Mensaje</Form.Label>
                                <Form.Control as='textarea' id='mensaje' rows={3} placeholder='Deje su mensaje' />
                            </Form.Group>
                            <Button variant='primary' type='submit' className='btnFormulario'>
                                Enviar
                            </Button>
                            <Button variant='secondary' type='reset' className='btnFormulario'>
                                Reset
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact
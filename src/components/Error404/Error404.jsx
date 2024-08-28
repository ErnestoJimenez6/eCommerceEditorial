import{Link}from'react-router-dom'
import'./Error404.css'

const Error404=()=>{
    return(
        <div className='error-container'>
            <h1 className='error-title'>404</h1>
            <p className='error-message'>No se encontró la página</p>
            <p className='error-description'>
                Oops! La página que buscas no existe.
            </p>
            <Link to='/' className='error-link'>Volver</Link>
        </div>
    )
}

export default Error404;

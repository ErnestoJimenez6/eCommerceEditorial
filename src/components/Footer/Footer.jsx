import'./Footer.css'
import{Link}from'react-router-dom'

const Footer=()=>{
    return(
        <footer>
            <div className='container'>
                <div className='row justify-content-center'>
                    <p>EDITORIAL MAR NEGRO - Todos los derechos reservados</p>
                    <div className='col-auto'>
                        <Link className='text-light' href='http://facebook.com'>
                            <img src='' alt='facebook'/>
                        </Link>
                    </div>
                    <div className='col-auto'>
                        <Link className='text-light' href='http://instagram.com'>
                            <img src='' alt='instagram'/>
                        </Link>
                    </div>
                    <div className='col-auto'>
                        <Link className='text-light' href='https://twitter.com/'>
                            <img src='' alt='twitter'/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
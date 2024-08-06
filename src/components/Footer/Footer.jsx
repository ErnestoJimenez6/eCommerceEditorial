import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import{Link}from'react-router-dom'
import'./Footer.css'

const socialLinks=[
    {
        url:'http://facebook.com',
        imgSrc:'path-to-facebook-logo',
        alt:'facebook'
    },
    {
        url:'http://instagram.com',
        imgSrc:'path-to-instagram-logo',
        alt:'instagram'
    },
    {
        url:'https://twitter.com/',
        imgSrc:'path-to-twitter-logo',
        alt:'twitter'
    }
]

const Footer=()=>{
    return(
        <footer className='bg-dark text-light py-3'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} className='text-center'>
                        <p>EDITORIAL MAR NEGRO - Todos los derechos reservados</p>
                    </Col>
                    {socialLinks.map((link,index)=>(
                        <Col xs='auto' key={index}>
                            <Link className='text-light' to={link.url}>
                                <img src={link.imgSrc} alt={link.alt}/>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import{Link}from'react-router-dom'
import'./Footer.css'

const Footer=()=>{
    return(
        <footer className='bg-dark text-light py-3'>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <p>EDITORIAL MAR NEGRO - Todos los derechos reservados</p>
                    </Col>
                    <Col xs="auto">
                        <Link className="text-light" to="http://facebook.com">
                            <img src="path-to-facebook-logo" alt="facebook" />
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link className="text-light" to="http://instagram.com">
                            <img src="path-to-instagram-logo" alt="instagram" />
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link className="text-light" to="https://twitter.com/">
                            <img src="path-to-twitter-logo" alt="twitter" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
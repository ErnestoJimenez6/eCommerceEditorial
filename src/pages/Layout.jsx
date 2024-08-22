/* eslint-disable react/prop-types */
import Footer from'../components/Footer/Footer'
import NavBar from'../components/NavBar/NavBar'

const Layout=({children})=>{
    return(
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
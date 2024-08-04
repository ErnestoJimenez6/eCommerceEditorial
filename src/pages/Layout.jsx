/* eslint-disable react/prop-types */
import Footer from'../components/Footer/Footer'
import NavBar from'../components/NavBar/NavBar'
import ItemCount from'../components/ItemCount/ItemCount'

const Layout=({children})=>{
    return(
        <>
            <NavBar/>
            {children}
            <ItemCount stock={10} initial={1}/>
            <Footer/>
        </>
    )
}

export default Layout
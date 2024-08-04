/* eslint-disable react/prop-types */
import Footer from'../components/Footer/Footer'
import Navbar from'../components/Navbar/Navbar'
import ItemCount from'../components/ItemCount/ItemCount'

const Layout=({children})=>{
    return(
        <>
            <Navbar/>
            {children}
            <ItemCount stock={10} initial={1}/>
            <Footer/>
        </>
    )
}

export default Layout
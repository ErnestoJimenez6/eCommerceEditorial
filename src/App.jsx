import'./App.css'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'
// import Navbar from'./components/Navbar/Navbar.jsx'
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.jsx'
// import{genres}from'./mock/mockData.js'
// import ItemCount from'./components/ItemCount/ItemCount'
import Layout from'./pages/Layout.jsx'

function App(){
  const title='Editorial Mar Negro'

  return(
    <>
      <Layout>
        <ItemListContainer title={title}/>
        <AboutUs/>
        <Contact/>
      </Layout>

      {/* <Navbar genres={genres} title='LOGO'/>
      <ItemCount stock={10} initial={1}/> */}
    </>
  )
}
export default App
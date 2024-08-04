import{BrowserRouter,Routes,Route}from'react-router-dom'
import'./App.css'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.jsx'
import Layout from'./pages/Layout.jsx'
import Error404 from './components/Error404/Error404.jsx'

function App(){
  const title='Editorial Mar Negro'

  return(
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
          <Route path='/' element={<ItemListContainer title={title}/>}/>
            <Route path='/Home' element={<ItemListContainer title={title}/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App
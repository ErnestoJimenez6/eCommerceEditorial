import{BrowserRouter,Routes,Route}from'react-router-dom'
import CartContextProvider from'./context/CartContext'
import'./App.css'
import AboutUs from'./components/AboutUs/AboutUs.jsx'
import Contact from'./components/Contact/Contact.jsx'
import ItemListContainer from'./components/ItemListContainer/ItemListContainer'
import Layout from'./pages/Layout'
import Error404 from'./components/Error404/Error404'
import ItemDetailContainer from'./components/ItemDetailContainer/ItemDetailContainer'
import Cart from'./components/Cart/Cart'

function App(){
  return(
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>  
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
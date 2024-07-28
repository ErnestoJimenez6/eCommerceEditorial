import'./App.css'
import Navbar from'./components/Navbar/Navbar.jsx'
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.jsx'
import{genres}from'./mock/mockData.js'
import ItemCount from'./components/ItemCount/ItemCount'

function App(){
  const title='Editorial Mar Negro'

  return(
    <>
      <Navbar genres={genres} title='LOGO'/>
      <ItemListContainer title={title}/>
      <ItemCount stock={10} initial={1}/>
    </>
  )
}
export default App
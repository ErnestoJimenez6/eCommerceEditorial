import'./App.css'
import NavBar from'./components/NavBar/NavBar.jsx'
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.jsx'
import{categories}from'./mock/mockData.js'

function App(){
  const title='Editorial Mar Negro'

  return(
    <>
      <NavBar categories={categories} title='LOGO'/>
      <ItemListContainer title={title}/>
    </>
  )
}
export default App
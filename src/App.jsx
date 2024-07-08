import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import {categories} from './mock/mockData.js'

function App(){
  const title='Editorial Mar Negro'

  return(
    <>
      <Navbar categories={categories} title='LOGO'/>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default App
//import './App.css'

//function App() {

//  return <h1>Editorial Mar Negro</h1>

//}

//export default App

import './App.css'
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda de libros!" />
    </div>
  );
}

export default App;

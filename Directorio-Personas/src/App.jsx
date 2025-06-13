import Directorio from './Componentes/Directorio.jsx';
import './App.css'

function App() {
  return (
    <div className='app'>
      <h1>Directorio de Personas</h1>
      
      <div className='lista-productos'>
        <Directorio 
          nombre="Juanito"
          cargo="Ingeniero"
          email="juanito@gmail.com"
          imagen="Juanito.jfif"
          fechaNacimiento="2010-04-25"
        />
        <Directorio 
          nombre="Pepito"
          cargo="Maestro"
          email="pepito@gmail.com"
          imagen="Pepito.jfif"
          fechaNacimiento="2004-02-13"
        />
        <Directorio 
          nombre="Pepita"
          cargo="Conductor"
          email="pepita@gmail.com"
          imagen="Pepita.jfif"
          fechaNacimiento="1993-12-12"
        />
      </div>
    </div>


  )
}

export default App

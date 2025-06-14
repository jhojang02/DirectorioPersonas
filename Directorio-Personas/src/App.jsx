import Directorio from './Componentes/Directorio.jsx';
import './App.css'

function App() {
  return (
    <div className='app'>
      <h1>Directorio de Personas</h1>
      
      <div className='Directorio'>
        <Directorio 
          nombre="Juanito"
          cargo="Ingeniero"
          email="juanito@gmail.com"
          imagen="/imagenes/Juanito.jpg"
          fechaNacimiento="2010-04-25"
        />
        <Directorio 
          nombre="Pepito"
          cargo="Maestro"
          email="pepito@gmail.com"
          imagen="/imagenes/Pepito.jpg"
          fechaNacimiento="2004-02-13"
        />
        <Directorio 
          nombre="Pepita"
          cargo="Conductor"
          email="pepita@gmail.com"
          imagen="/imagenes/Pepita.jpg"
          fechaNacimiento="1993-12-12"
        />
      </div>
      <div className='Directorio'>
        <Directorio 
          nombre="Martin"
          cargo="Ingeniero"
          email="martin@gmail.com"
          imagen="/imagenes//Hombre.jpg"
          fechaNacimiento="2007-04-25"
        />
        <Directorio 
          nombre="Martina"
          cargo="Doctor"
          email="martina@gmail.com"
          imagen="/imagenes/Mujer.jpg"
          fechaNacimiento="2003-02-13"
        />
        <Directorio 
          nombre="Ermenegildo"
          cargo="Inventor"
          email="Ermenegildo@gmail.com"
          imagen="/imagenes/Hombre2.jpg"
          fechaNacimiento="1963-12-12"
        />
      </div>
      <div className='Directorio'>
        <Directorio 
          nombre="Manuela"
          cargo="Vendedora"
          email="manuela@gmail.com"
          imagen="/imagenes/Mujer2.jpg"
          fechaNacimiento="1994-04-25"
        />
        <Directorio 
          nombre="Manuel"
          cargo="Contador"
          email="manuel@gmail.com"
          imagen="/imagenes/Hombre3.jpg"
          fechaNacimiento="2004-02-13"
        />
        <Directorio 
          nombre="Saray"
          cargo="Bailarina"
          email="saray@gmail.com"
          imagen="/imagenes/Mujer3.jpg"
          fechaNacimiento="2000-12-12"
        />
      </div>
    </div>


  )
}

export default App

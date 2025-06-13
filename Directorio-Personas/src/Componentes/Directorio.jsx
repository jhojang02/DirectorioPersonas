import './Directorio.css';
function Directorio({ nombre, cargo, email, imagen, fechaNacimiento}) {
const edad = CalcularEdad(fechaNacimiento);
    return (
    <div className='producto'>
        <h1>{nombre}</h1>
        <p><strong>Cargo: </strong>{cargo}</p>
        <p><strong>Correo: </strong>{email}</p>
        <img src={imagen} alt='Foto de la Persona'></img>
        <p><strong>Edad: </strong>{edad} años</p>
    </div>
    )
}

function CalcularEdad (fecha_nacimiento) {
  const hoy = new Date();
  const Nacimiento = new Date(fecha_nacimiento);
  let edad = hoy.getFullYear() - Nacimiento.getFullYear();
  const mes = hoy.getMonth() - Nacimiento.getMonth;

  if (mes < 0 || (mes === 0 && hoy.getDate() < Nacimiento.getDate())) {
    edad--;
  }
  return edad
  }

export default Directorio
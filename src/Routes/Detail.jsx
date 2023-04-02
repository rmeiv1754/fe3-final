
import { useParams } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context';
import { useEffect } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const{dentistaSel, setDentistaSel} =useGlobalStates();

  const params = useParams()
  console.log(useParams())
 
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`


  useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setDentistaSel(data))

  }, [params.id])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
    <h1>Detail Dentist id {dentistaSel.id}</h1>
    <div>
        <h3>Nombre: {dentistaSel.name}</h3>
        <h3>Email: {dentistaSel.email}</h3>
        <h3>Teléfono: {dentistaSel.phone}</h3>
        <h3>Website: {dentistaSel.website}</h3>

      </div>
    {/* aqui deberan renderizar la informacion en detalle de un user en especifico /}
    {/ Deberan mostrar el name - email - phone - website por cada user en especifico */}
  </>
  )
}

export default Detail
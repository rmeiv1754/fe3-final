import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
  function validarEmail(elemento){

    var regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  
    if (!regex.test(elemento)) {
        return false;
    } else {
      return true;
    }
  
  }

    const [user, setUser] = useState({
        nombre: '',
        email: '',
    })


    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)


    const submitCheck = (event) => {
        event.preventDefault()
        if(user.nombre.length > 5 && validarEmail(user.email)) {
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }
    }


  return (
    <div>
        <form onSubmit={submitCheck}>
            <h1>Contactenos</h1>
            <label>Nombre completo: </label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Email: </label>
            <input type="text" value={user.email} id= "" onChange={(e) => setUser({...user, email: e.target.value})}/>
            <button>Enviar</button>
            {err && "Por favor verifique su información nuevamente"}
        </form>
        {show  && <p>Gracias {user.nombre}, te contactaremos cuando antes vía mail</p>}
    </div>
  )
}

export default Form
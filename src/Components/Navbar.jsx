import React from 'react'
import { routes } from '../Routes/routes'
import { Link, Route, Routes } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={routes.home}><h3>Home</h3></Link>
       <Link to={routes.contact}><h3>Contact</h3></Link>
       <Link to={routes.detail}><h3>Details</h3></Link>
       <Link to={routes.favs}><h3>Favs</h3></Link>
  
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import { routes } from "./Routes/routes";
import { useEffect, useState } from "react";


function App() {
  return (
      <div className="App">
           <Navbar/>
        <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path="/dentista/:id" element={<Detail/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
        </Routes>
          <Footer/>
      </div>
  );
}

export default App;

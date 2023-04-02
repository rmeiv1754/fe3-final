
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
  const [dentistaSel, setDentistaSel] = useState({}); 
  const [cards, setCards] = useState([{}])
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        fetch(url)
        .then(cards => cards.json())
        .then(data => setCards(data))
    }, [])
    console.log(cards)

  return (
      <div className="App">
           <Navbar/>
        <Routes>
          <Route path={routes.home} element={<Home cards = {cards} dentistaSel={dentistaSel} setDentistaSel={setDentistaSel}/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path="/dentista/:id" element={<Detail cards = {cards} dentistaSel={dentistaSel} setDentistaSel={setDentistaSel}/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
        </Routes>
          <Footer/>
      </div>
  );
}

export default App;

import React from 'react'
import { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [cards, setCard] = useState([{}])
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        fetch(url)
        .then(cards => cards.json())
        .then(data => setCard(data))
    }, [])
    console.log(cards)

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {cards.map(card => (
        <botton key={card.id}>
            <div>
                <img src="./images/doctor.jpg" alt="" style={{width: 500, height: 250, objectFit: 'cover'}}/>
                <h3>{card.name}</h3>
                <h4>{card.username}</h4>
            </div>
            </botton>
        ))}
      </div>
    </main>
  )
}

export default Home
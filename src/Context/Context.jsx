import {createContext, useContext, useEffect, useState} from 'react'

const GlobalStates = createContext()

const Context = ({children}) => {
    const [dentistaSel, setDentistaSel] = useState({}); 
    const [cards, setCards] = useState([{}])

    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        fetch(url)
        .then(cards => cards.json())
        .then(data => setCards(data))
    }, [])
 
    return (
        <GlobalStates.Provider value={{
            cards, setCards, 
            dentistaSel, setDentistaSel}}>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => useContext(GlobalStates)
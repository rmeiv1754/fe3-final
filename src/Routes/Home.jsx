
import Card from '../Components/Card';
import { useGlobalStates } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {

  const {themeState} = useGlobalStates()

  return (
    <main className={themeState.theme ? "dark" : "light"}>
      <h1>Home</h1>
      <Card/>
    </main>
  )
}

export default Home
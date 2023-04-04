import { useGlobalStates } from "../Context/Context";
import { Link } from "react-router-dom";

const Card = () => {
  const{apiState, favState, favDispatch, apiDispatch} = useGlobalStates();
  console.log(favState)

  const addFav = (card) => {
    if (favState.find((fav) => fav.id === card.id)) {
      alert("Este dentista ya está en tus favoritos");
    }
  else{
    favDispatch({type: 'ADD_FAV', payload: card})
  }
   
  }
  
  return (
    <div className="card-grid">
    {apiState.map((card) => (
        <button>
          <div>
            <img
              src="./images/doctor.jpg"
              alt=""
              style={{ width: 500, height: 250, objectFit: "cover" }}
            />
            <Link key={card.id} to={"/dentista/" + card.id}>
            <h3>{card.name}</h3>
            </Link>
            <h4>{card.username}</h4>
          </div>
            <button onClick={() => addFav(card)} className="favButton">
              ⭐
            </button>
        </button>
      
    ))}


  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle /}

  {/ Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
</div>
  );
};

export default Card;

import { useGlobalStates } from "../Context/Context";
import { Link } from "react-router-dom";

const Card = () => {
  const { apiState, favState, favDispatch } = useGlobalStates();

  const addFav = (card) => {
    if (favState.find((fav) => fav.id === card.id)) {
      alert("Este dentista ya está en tus favoritos");
    } else {
      favDispatch({ type: "ADD_FAV", payload: card });
    }
  };

  return (
    <div className="card-grid">
      {apiState.map((card) => (
        <div key={card.id}>
          <div className="card">
            <img className="card-img" src="./images/doctor.jpg" alt="" />
            <Link key={card.id} to={"/dentista/" + card.id}>
              <h3>{card.name}</h3>
            </Link>
            <h3>{card.username}</h3>
            <Link to="/destacados">
            <button onClick={() => addFav(card)} className="favButton">
              ⭐
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

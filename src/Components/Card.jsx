import React from "react";
import { useGlobalStates } from "../Context/Context";
import { Link } from "react-router-dom";
import { routes } from "../Routes/routes";
import Detail from "../Routes/Detail"


const Card = ({ name, username, id }) => {

  const{cards, dentistaSel, setDentistaSel} = useGlobalStates();
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card-grid">
    {cards.map((card) => (
      <Link key={card.id} to={"/dentista/" + card.id}>
        <button onClick={() => {setDentistaSel(card)}}>
          <div>
            <img
              src="./images/doctor.jpg"
              alt=""
              style={{ width: 500, height: 250, objectFit: "cover" }}
            />
            <h3>{card.name}</h3>
            <h4>{card.username}</h4>
          </div>

          <Link to={routes.favs}>
            <button onClick={addFav} className="favButton">
              ⭐
            </button>
          </Link>
        </button>
      </Link>
    ))}


  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle /}

  {/ Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
</div>
  );
};

export default Card;

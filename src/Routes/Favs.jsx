import React from "react";
import { useGlobalStates } from "../Context/Context";
import { Link } from "react-router-dom";

const Favs = () => {
  const { favState } = useGlobalStates();

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favState.map((card) => (
          <div key={card.id}>
            <div className="card">
              <img className="card-img" src="./images/doctor.jpg" alt="" />
              <Link key={card.id} to={"/dentista/" + card.id}>
                <h3>{card.name}</h3>
              </Link>
              <h4>{card.username}</h4>
              <button className="favButton-fav">⭐</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;

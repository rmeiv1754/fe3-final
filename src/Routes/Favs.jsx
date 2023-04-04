import React from "react";
import { useGlobalStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useGlobalStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      <button>
            {favState.map((card) => (
              <div key={card.id}>
                <img
              src="./images/doctor.jpg"
              alt=""
              style={{ width: 500, height: 250, objectFit: "cover" }}
            />
            <h3>{card.name}</h3>
            <h4>{card.username}</h4>
              </div>
            ))}
            </button>
          </div>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
    </>
  );
};

export default Favs;

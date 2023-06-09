import React, { useState } from "react";

const Form = () => {
  function validarEmail(elemento) {
    var regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (!regex.test(elemento)) {
      return false;
    } else {
      return true;
    }
  }

  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const submitCheck = (event) => {
    event.preventDefault();
    if (user.nombre.length > 5 && validarEmail(user.email)) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={submitCheck} className="form">
        <h2>Contáctanos</h2>
        <label>Nombre completo: </label>
        <input
          type="text"
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <label>Email: </label>
        <input
          type="text"
          value={user.email}
          id=""
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button>Enviar</button>
        <div className="form-error">
          {err && "Por favor verifique su información nuevamente"}
        </div>
      </form>
      <div className="form-valid">
        {show && (
          <p>¡Gracias {user.nombre}! te contáctaremos cuanto antes vía mail</p>
        )}
      </div>
    </div>
  );
};

export default Form;

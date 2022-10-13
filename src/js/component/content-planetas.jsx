import React, { useState, useEffect, useContext } from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";

export const ContentPlanetas = () => {

  const {store, actions} = useContext(Context);

  // if (planetas[i] === 0) {
  //   (id+1) === "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
  // }

  return (
    <div className="row m-5"><hr className="border-danger"/>
      <h1 className="m-5 text-danger">Planetas</h1>
      {store.planetas.map((item, id) => <div className="card" key={id} style={{ width: "18rem" }}>
        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + (".jpg")} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Diameter: {item.diameter}</p>
          <p className="card-text">Population: {item.population}</p>
          <p className="card-text">Terrain: {item.terrain}</p>
          <Link to={"/details-planetas/" + (id + 1)} className="btn btn-primary">Leer mas...</Link>
          <Link to="" className="btn btn-danger"><i className="far fa-heart" onClick={() => actions.marcarFavoritos(item)}></i></Link>
        </div>
      </div>
      )}
    </div>
  );
};
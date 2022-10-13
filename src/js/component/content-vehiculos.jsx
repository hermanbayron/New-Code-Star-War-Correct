import React, { useState, useEffect, useContext } from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";

export const ContentVehiculos = () => {

  const {store, actions} = useContext(Context);

  return (
    <div className="row m-5"><hr className="border-danger"/>
      <h1 className="m-5 text-danger">Vehiculos</h1>
      {store.vehiculos.map((item, id) => <div className="card" key={id} style={{ width: "18rem" }}>
        <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id + 1) + (".jpg")} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Cost-in-credits: {item.cost_in_credits}</p>
          <p className="card-text">Length: {item.length}</p>
          <p className="card-text">Passengers: {item.passengers}</p>
          <Link to={"/details-vehiculos/" + (id + 1)} className="btn btn-primary">Leer mas...</Link>
          <Link to="" className="btn btn-danger"><i className="far fa-heart" onClick={() => actions.marcarFavoritos(item)}></i></Link>
        </div>
      </div>
      )}
    </div>
  );
};
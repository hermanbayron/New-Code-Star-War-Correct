import React, { useState, useEffect, useContext } from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";

export const ContentPersonajes = () => {

  const {store, actions} = useContext(Context);

  return (
    <div className="row m-5"><hr className="border-danger"/>
      <h1 className="m-5 text-danger">Personajes</h1>
      {store.personajes.map((item, id) => <div className="card" key={id} style={{ width: "18rem" }}>
        <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + (".jpg")} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Eye-Color: {item.eye_color}</p>
          <p className="card-text">Hair-Color: {item.hair_color}</p>
          <p className="card-text">Gender: {item.gender}</p>
          <Link to={"/details-personajes/" + (id + 1)} className="btn btn-primary">Leer mas...</Link>
          <Link to="" className="btn btn-danger"><i className="far fa-heart" onClick={() => actions.marcarFavoritos(item)}></i></Link>
        </div>
      </div>
      )}
    </div>
  );
};
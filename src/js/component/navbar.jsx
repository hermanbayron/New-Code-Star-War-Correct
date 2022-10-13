import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const {store, actions} = useContext(Context);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light bg-secondary">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
          <i className="fab fa-galactic-republic fs-1 text-dark"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle btn btn-danger text-white"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favorites {store.listaFavoritos.length}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">
                    {store.listaFavoritos.map((item, id) => 
                    <li className="list-group-item border border-1" key={id}>
                        {item.name}<span className="close btn btn-danger" onClick={() => actions.eliminarFavoritos(item)}><b>X</b></span>
                    </li>)}
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

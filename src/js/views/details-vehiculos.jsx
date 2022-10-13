import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsVehiculos = () => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	//  Use effect
	useEffect(() => {
		actions.getInfoDetailsVehiculos(params.id);
	}, []);

	return (
		<div className="jumbotron d-flex justify-content-center p-5">
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (params.id) + (".jpg")} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.detalleVehiculo?.name}</h5>
							<p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam fugiat ipsa laudantium aspernatur reprehenderit cum atque error repellat aliquid quibusdam sint sequi perferendis quae at, delectus labore nesciunt iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aspernatur repellendus ipsam aliquid deleniti doloremque assumenda voluptates nemo ipsa molestias? Ipsa quidem minima, ea eligendi dolore quos consequuntur nam atque!</p>
							<hr className="border-danger" />
							<div className="container text-center">
							</div>
						</div>
						<div className="row">
							<div className="col text-danger m-2">
								Name <br /> {store.detalleVehiculo?.name}
							</div>
							<div className="col text-danger m-2">
								Model <br /> {store.detalleVehiculo?.model}
							</div>
							<div className="col text-danger m-2">
								Cost in credits <br /> {store.detalleVehiculo?.cost_in_credits}
							</div>
							<div className="col text-danger m-2 ">
								Length <br /> {store.detalleVehiculo?.length}
							</div>
							<div className="col text-danger m-2">
								Passengers <br /> {store.detalleVehiculo?.passengers}
							</div>
							<div className="col text-danger m-2">
								Cargo capacity <br /> {store.detalleVehiculo?.cargo_capacity}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailsVehiculos.propTypes = {
	match: PropTypes.object
};
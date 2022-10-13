import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanetas = () => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	//  Use effect
	useEffect(() => {
		actions.getInfoDetailsPlanetas(params.id);
	}, []);

	return (
		<div className="jumbotron d-flex justify-content-center p-5">
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + (".jpg")} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.detallePlanetas?.name}</h5>
							<p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam fugiat ipsa laudantium aspernatur reprehenderit cum atque error repellat aliquid quibusdam sint sequi perferendis quae at, delectus labore nesciunt iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aspernatur repellendus ipsam aliquid deleniti doloremque assumenda voluptates nemo ipsa molestias? Ipsa quidem minima, ea eligendi dolore quos consequuntur nam atque!</p>
							<hr className="border-danger" />
							<div className="container text-center">
							</div>
						</div>
						<div className="row">
							<div className="col text-danger m-2">
								Name <br /> {store.detallePlanetas?.name}
							</div>
							<div className="col text-danger m-2">
								Orbital Period <br /> {store.detallePlanetas?.orbital_period}
							</div>
							<div className="col text-danger m-2">
								Diameter <br /> {store.detallePlanetas?.diameter}
							</div>
							<div className="col text-danger m-2">
								Terrain <br /> {store.detallePlanetas?.terrain}
							</div>
							<div className="col text-danger m-2">
								Population <br /> {store.detallePlanetas?.population}
							</div>
							<div className="col text-danger m-2">
								Climate <br /> {store.detallePlanetas?.climate}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailsPlanetas.propTypes = {
	match: PropTypes.object
};
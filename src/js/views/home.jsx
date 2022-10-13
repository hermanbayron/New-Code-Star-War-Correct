import React from "react";
import "../../styles/home.css";

import { ContentPersonajes } from "../component/content-personajes.jsx";
import { ContentVehiculos } from "../component/content-vehiculos.jsx";
import { ContentPlanetas } from "../component/content-planetas.jsx";

export const Home = () => {

	return (
		<div>
			<ContentPersonajes />
			<ContentVehiculos />
			<ContentPlanetas />
		</div>
	);
};
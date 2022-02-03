import React, { useState } from "react";
import TareaForm from "./TareaForm.jsx";
import "../../styles/index.css";
import Tarea from "./Tarea.jsx";

const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	};
	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	return (
		<div className="container">
			<TareaForm nuevaTarea={nuevaTarea} />
			<div className="lista">
				{listaTareas.map((e, index) => (
					<Tarea tarea={e} borrar={borrar} id={index} />
				))}
			</div>
		</div>
	);
};

export default Home;

import React, { useState, useEffect } from "react";
import TareaForm from "./TareaForm.jsx";
import "../../styles/index.css";
import Tarea from "./Tarea.jsx";

const Home = () => {
	/*const task = {
		label: "",
		done: false,
	}; */
	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	};

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/BernatLl", {
			method: "GET",
			body: JSON.stringify(todos),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				setListaTareas(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/BernatLl", {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				nuevaTarea(data);
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
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

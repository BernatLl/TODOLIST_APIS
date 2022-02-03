import React from "react";
import "../../styles/index.css";

const Tarea = (props) => {
	const borrarTarea = () => {
		props.borrar(props.id);
	};
	return (
		<div>
			<div className="tarea">
				<span>{props.tarea}</span>
				<button className="btn" onClick={borrarTarea}>
					Borrar
				</button>
			</div>
		</div>
	);
};

export default Tarea;

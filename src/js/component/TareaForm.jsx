import React, { useState } from "react";
import "../../styles/index.css";

const TareaForm = (props) => {
	const [inputText, setInputText] = useState("");
	const [validacion, setValidacion] = useState(true);

	const manejarFormulario = (e) => {
		setInputText(e.target.value);
	};
	const submit = (e) => {
		e.preventDefault();
		if (inputText.trim() !== "") {
			props.nuevaTarea(inputText);
			setInputText("");
			setValidacion(true);
		} else {
			setValidacion(false);
		}
	};

	return (
		<div>
			<form className="form" onSubmit={submit}>
				<span>Añadir tarea</span>
				<input value={inputText} onChange={manejarFormulario} />
				<button className="btn btn-dark">Añadir</button>
			</form>
			{!validacion && (
				<div className="validacion">Añada una tarea, Please!!</div>
			)}
		</div>
	);
};
export default TareaForm;

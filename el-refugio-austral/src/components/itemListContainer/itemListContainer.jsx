import React from "react";
import "./itemListContainer.css";

export default function ItemListContainer({ saludo }) {
	return (
		<>
			<h1 className="greeting">{saludo}</h1>
		</>
	);
}

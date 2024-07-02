import React from "react";
import { BsCart4 } from "react-icons/bs";
import "./Carrito.css";

function Carrito() {
	const iconStyle = {
		fontSize: "40px",
		position: "relative",
		top: "-20px",
	};
	return (
		<>
			<li>
				<a href="#" className="carritoDeCompras">
					<p>5</p>
					<BsCart4 style={iconStyle} />
				</a>
			</li>
		</>
	);
}

export default Carrito;

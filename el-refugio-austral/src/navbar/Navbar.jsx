import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<ul className="BarraDeNavegacion">
			<li>
				<a href="">
					<img src="./img/tienda-de-animales.png" alt="imgref" />
				</a>
			</li>
			<li>
				<a href="">Inicio</a>
			</li>
			<li className="nav-item dropdown">
				<a
					class="nav-link dropdown-toggle"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Productos
				</a>
				<ul class="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">
							Alimentos
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Ropa
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Juguetes
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Veterinaria
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Collares
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="">Contacto</a>
			</li>
			<li>
				<div className="carritoDeCompras">
					<a href="">
						<img src="./img/carrito-de-compras.png" alt="imgref" />
					</a>
					<p>-</p>
				</div>
			</li>
		</ul>
	);
}

export default Navbar;

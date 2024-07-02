import React from "react";
import "./Navbar.scss";

const listaCategorias = [
	{ key: "Alimentos", value: "#" },
	{ key: "Accesorios", value: "#" },
	{ key: "Juguetes", value: "#" },
	{ key: "Productos de Higiene", value: "#" },
	{ key: "Colchones", value: "#" },
];

function GenerarLista({ array }) {
	return (
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Productos
			</a>
			<ul className="dropdown-menu">
				{array.map((element) => (
					<li>
						<a className="dropdown-item" href={element.value}>
							{element.key}
						</a>
					</li>
				))}
			</ul>
		</li>
	);
}

function Navbar() {
	return (
		<>
			<nav className=" navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src="./img/tienda-de-animales.png" alt="imgref" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="BarraDeNavegacion navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active text-center"
									aria-current="page"
									href="#"
								>
									¿Como comprar?
								</a>
							</li>
							<GenerarLista array={listaCategorias} />
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contacto
								</a>
							</li>
							<li>
								<div className="carritoDeCompras">
									<a href="">
										<div>
											<img src="./img/carrito-de-compras.png" alt="imgref" />
										</div>
										<p>5</p>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

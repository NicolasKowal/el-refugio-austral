import React from "react";
import "./Navbar.scss";

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
											Accesorios
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Veterinaria
										</a>
									</li>
								</ul>
							</li>
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
										<p></p>
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

import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import Card from "./components/card/Card";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
	const greetings = "Hola bienvenidos";
	return (
		<>
			<Topbar />
			<Navbar />
			<ItemListContainer saludo={greetings} />
			<Card />
		</>
	);
}

export default App;

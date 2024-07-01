import "./App.css";
import Navbar from "./navbar/Navbar";
import Landing from "./landing/Landing";
import Topbar from "./topbar/Topbar";

function App() {
	return (
		<>
			<Topbar />
			<Navbar />
			<Landing />
		</>
	);
}

export default App;

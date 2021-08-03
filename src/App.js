import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import List from "./List";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Welcome</h1>
				<List />
			</div>
		</Provider>
	);
}

export default App;

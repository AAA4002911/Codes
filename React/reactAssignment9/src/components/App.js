import React from "react";
import "./../styles/App.css";
import TodoList from "./TodoList.jsx";

function App() {
	return (
		<div id="main">
			{/* //Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component. */}
			< TodoList />
		</div>
	);
}


export default App;

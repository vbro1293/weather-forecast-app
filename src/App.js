import React from "react";
import "./App.css";

//==========IMPORT CUSTOM COMPONENTS
import Header from "./components/Header";
import Form from "./containers/Form";
import ForecastSection from "./containers/ForecastSection";

const App = () => (
	<div className="app">
		<section className="heading">
			<Header>Weather Dashboard</Header>
			<Form />
		</section>
		<ForecastSection />
	</div>
);

export default App;

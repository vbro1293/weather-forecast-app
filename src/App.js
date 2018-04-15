import React, { Component } from "react";
import "./App.css";

//==========IMPORT CUSTOM COMPONENTS
import Header from "./components/Header";
import Form from "./containers/Form";
import ForecastSection from "./containers/ForecastSection";

class App extends Component {
  render() {
    return (
      <div>
        <Header>Weather Forecast</Header>
        <Form />
        <ForecastSection />
      </div>
    );
  }
}

export default App;

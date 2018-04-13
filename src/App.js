import React, { Component } from "react";
import "./App.css";

//==========IMPORT CUSTOM COMPONENTS
import Header from "./components/Header";
import Form from "./containers/Form";
import TodaySection from "./containers/TodaySection";
import WeekSection from "./components/WeekSection";

class App extends Component {
  render() {
    return (
      <div>
        <Header>Weather Forecast</Header>
        <Form />
        <TodaySection />
        <WeekSection>Six Day Forecast</WeekSection>
      </div>
    );
  }
}

export default App;

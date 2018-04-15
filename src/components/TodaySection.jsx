import React from "react";
import TodayDetail from "./TodayDetail";

const TodaySection = ({ todayData }) => {
    const { location, time, curTemp, curWeather, sundown } = todayData;
   
    return (
        <section>
            <header>
                <h1>{ location }</h1>
                <h3>{ time }</h3>
            </header>
            <TodayDetail value={ curTemp } >Current Temp</TodayDetail>
            <TodayDetail value={ curWeather }>Current Weather</TodayDetail>
            <TodayDetail value={ sundown }>Sundown</TodayDetail>
        </section>
    );
};

export default TodaySection;
import React from "react";
import TodayDetail from "./TodayDetail";

const TodaySection = ({ todayData }) => {
    const { curTemp, curWeather, sundown } = todayData;
    return (
        <section className="todaySection">
            <TodayDetail value={ curTemp } >Current Temp</TodayDetail>
            <TodayDetail value={ curWeather }>Current Weather</TodayDetail>
            <TodayDetail value={ sundown }>Sundown</TodayDetail>
        </section>
    );
};

export default TodaySection;
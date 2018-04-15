import React from "react";
import TodayDetail from "./TodayDetail";
import moment from "moment";

const TodaySection = ({ weather }) => {
    const weatherToday = weather.slice().toJS();
    const curTemp = weatherToday["consolidated_weather"]["5"]["the_temp"];
    const curWeather = weatherToday["consolidated_weather"]["5"]["weather_state_name"];
    const sundown = moment(weatherToday.sun_set).fromNow();
    return (
        <section>
            {console.log(curWeather)}
            <h3>{ weatherToday.title }</h3>
            <TodayDetail value={ curTemp } >Current Temp</TodayDetail>
            <TodayDetail value={ curWeather }>Current Weather</TodayDetail>
            <TodayDetail value={ sundown }>Sundown</TodayDetail>
            {/* sun set - timeNow (dependent on timezone)*/}
        </section>
    )
};

export default TodaySection;
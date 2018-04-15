import React from "react";
import TodayDetail from "./TodayDetail";
import moment from "moment-timezone";


const TodaySection = ({ weather }) => {
    //Copy of state, convert immutable to JS object
    const weatherToday = weather.slice().toJS();
    //Set consts of values req'd
    const curTemp = weatherToday["consolidated_weather"]["0"]["the_temp"];
    const curWeather = weatherToday["consolidated_weather"]["0"]["weather_state_name"];
    const sundown = moment(weatherToday.sun_set).fromNow();
    //set local timezone, to show correct time
    moment.tz.setDefault(weatherToday.timezone);
   
    return (
        <section>
            <header>
                <h1>{ weatherToday.title }</h1>
                <h3>{moment(weatherToday.time).format('llll') }</h3>
            </header>
            <TodayDetail value={ curTemp } >Current Temp</TodayDetail>
            <TodayDetail value={ curWeather }>Current Weather</TodayDetail>
            <TodayDetail value={ sundown }>Sundown</TodayDetail>
        </section>
    );
};

export default TodaySection;
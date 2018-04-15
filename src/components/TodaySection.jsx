import React from "react";
import TodayDetail from "./TodayDetail";
import moment from "moment";

const TodaySection = ({ weather }) => {
    const weatherToday = weather.slice().toJS();
    const temp = weatherToday["consolidated_weather"]["5"]["the_temp"];
    return (
        <section>
            {console.log(temp)}
            <h3>{weatherToday.title}</h3>
            <TodayDetail value={ temp } >Current Temp</TodayDetail>
            <TodayDetail>Current Weather</TodayDetail>
            <TodayDetail value={ moment(weatherToday.sun_set).fromNow() }>Sundown</TodayDetail>
            {/* sun set - timeNow (dependent on timezone)*/}
        </section>
    )
};

export default TodaySection;
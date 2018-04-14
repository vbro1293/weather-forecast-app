import React from "react";
import TodayDetail from "./TodayDetail";
import moment from "moment";

const TodaySection = ({ weather }) => {
    const weatherToday = weather.slice().toJS();
    return (
        <section>
        { true  ?
            <section>
                {console.log(weatherToday)}
                <h3>{weatherToday.title}</h3>
                <TodayDetail  >Current Temp</TodayDetail>
                <TodayDetail>Current Weather</TodayDetail>
                <TodayDetail value={ moment(weatherToday.sun_set).fromNow() }>Sundown</TodayDetail>
                {/* sun set - timeNow (dependent on timezone)*/}
            </section>
        :
        <p>no</p>
        }
        </section>

    )
};

export default TodaySection;
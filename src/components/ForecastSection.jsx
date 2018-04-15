import React from "react";
import TodaySection from "./TodaySection";
import WeekSection from "./WeekSection";

const ForecastSection = ({ weather }) => (
    <section>
        { weather.size>0 ?
            <section>
                <TodaySection weather={ weather } />
                <WeekSection weather={ weather }>Six Day Forecast</WeekSection>
            </section>
        :
            <p>Please enter a location</p>
        }
    </section>
);

export default ForecastSection;
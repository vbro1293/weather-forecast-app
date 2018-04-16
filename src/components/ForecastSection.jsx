import React from "react";
import TodaySection from "./TodaySection";
import WeekSection from "./WeekSection";

const ForecastSection = ({ todayData, weekData, error }) => (
    <section>
        {/* No data- weekData returns Map with size 0, otherwise will return object literal */}
        { !error ?
            (weekData.size !== 0 ?
            <section>
                <TodaySection todayData={ todayData } />
                <WeekSection weekData={ weekData }>Six Day Forecast</WeekSection>
            </section>
            : 
            <p>Please enter a city to find out it's forecast</p>) 
        :
        <p>Please try a different city</p>
    }
    </section>
);

export default ForecastSection;
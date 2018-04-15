import React from "react";
import TodaySection from "./TodaySection";
import WeekSection from "./WeekSection";

const ForecastSection = ({ todayData, weekData }) => (
    <section>
        {/* No data- weekData returns Map with size 0, otherwise will return object literal */}
        { weekData.size !== 0 ?
            <section>
                <TodaySection todayData={ todayData } />
                <WeekSection weekData={ weekData }>Six Day Forecast</WeekSection>
            </section>
        :
            <p>Please enter a location</p>
        }
    </section>
);

export default ForecastSection;
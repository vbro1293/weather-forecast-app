import React from "react";

import TodayDetail from "./TodayDetail";

const TodaySection = () => (
    <section>
        <TodayDetail>Current Temp</TodayDetail>
        <TodayDetail>Current Weather</TodayDetail>
        <TodayDetail>Sundown</TodayDetail>
    </section>
);

export default TodaySection;
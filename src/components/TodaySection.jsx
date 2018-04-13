import React from "react";
import TodayDetail from "./TodayDetail";

const TodaySection = ({ weather }) => (
    <section>
        <h1>{ weather }</h1>
        <TodayDetail>Current Temp</TodayDetail>
        <TodayDetail>Current Weather</TodayDetail>
        <TodayDetail>Sundown</TodayDetail>
    </section>
);

export default TodaySection;
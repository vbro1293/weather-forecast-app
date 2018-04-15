import React from "react";

const TodayDetail = ({ children, value }) => (
    <div className="todayDetail">
        <h2>{ children }</h2>
        <h3>{ value }</h3>
    </div>
);

export default TodayDetail;
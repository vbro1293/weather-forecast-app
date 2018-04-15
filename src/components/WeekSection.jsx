import React from "react";
import Highcharts from "highcharts";
import { withHighcharts, HighchartsChart, Chart, Title, Legend, XAxis, YAxis, ColumnSeries } from "react-jsx-highcharts";

const WeekSection = ({ children, weekData }) => {
    const { minTempData, maxTempData, avgTempData, datesXData } = weekData;
    return(
        <HighchartsChart>
            <Chart />
            <Title>{ children }</Title>
            <Legend layout="vertical" align="right" verticalAlign="middle" />
            <XAxis categories={ datesXData } />
            <YAxis id="temp">
                <YAxis.Title>Temperature (degreesC)</YAxis.Title>
                <ColumnSeries id="min_temp" name="Min" data={ minTempData } />
                <ColumnSeries id="max_temp" name="Max" data={ maxTempData } />
                <ColumnSeries id="avg_temp" name="Avg" data={ avgTempData } />
            </YAxis>
        </HighchartsChart>
    )
};
            
export default withHighcharts(WeekSection, Highcharts);
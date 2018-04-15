import React, { Component } from "react";
import Highcharts from "highcharts";
import { withHighcharts, HighchartsChart, Chart, Title, Legend, XAxis, YAxis, ColumnSeries } from "react-jsx-highcharts";
import moment from "moment-timezone";

class WeekSection extends Component {
    render(){
        //Copy of state, convert immutable to JS object
        const weatherToday = this.props.weather.slice().toJS();
        const data = weatherToday["consolidated_weather"];
        const minTempData = data.reduce((acc, val) => {
            acc.push(val["min_temp"]);
            return acc;
        }, []);
        const maxTempData = data.reduce((acc, val) => {
            acc.push(val["max_temp"]);
            return acc;
        }, []);
        const avgTempData = data.reduce((acc, val) => {
            acc.push(val["the_temp"]);
            return acc;
        }, []);
        
        const datesXData = data.reduce((acc, val) => {
            acc.push(moment(val["applicable_date"]).format("MMM Do"));
            return acc;
        }, []);
        //set local timezone, to show correct time
        moment.tz.setDefault(weatherToday.timezone);

        return(
            <HighchartsChart>
                {console.log(data)}
                <Chart />
                <Title>{ this.props.children }</Title>
                <Legend layout="vertical" align="right" verticalAlign="middle" />
                <XAxis categories={ datesXData } />
                <YAxis id="temp">
                    <YAxis.Title>Temperature (degrees C)</YAxis.Title>
                    <ColumnSeries id="min_temp" name="Min" data={minTempData} />
                    <ColumnSeries id="max_temp" name="Max" data={maxTempData} />
                    <ColumnSeries id="avg_temp" name="Avg" data={avgTempData} />
                </YAxis>
            </HighchartsChart>
        )
    }
}
            
export default withHighcharts(WeekSection, Highcharts);
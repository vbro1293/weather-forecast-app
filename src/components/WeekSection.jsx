import React, { Component } from "react";
import { Chart } from "highcharts";

class WeekSection extends Component {

    // componentDidMount(){
    //     // Extend Highcharts with modules
    //     if (this.props.modules) {
    //         this.props.modules.forEach(function (module) {
    //             module(Highcharts);
    //         });
    //     }
    //     // Set container which the chart should render to.
    //     this.chart = new Highcharts[this.props.type || "Chart"](
    //         this.props.container,
    //         this.props.options
    //     );
    // };

    // //Destroy chart before unmount.
    // componentWillUnmount() {
    //     this.chart.destroy();
    // };


    render(){
        const options = {

        }
        return(
            <section className="weekSection">
                {/* <h2></h2> */}
                <div id="container" className="chartContainer" >
                    <ColumnSeries container="chart" options ={ options } modules= "Column"/>
                </div>
            </section>
    
        )
    }
}
            
export default WeekSection;
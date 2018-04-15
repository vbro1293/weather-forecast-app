import { connect } from "react-redux";
import ForecastSection from "../components/ForecastSection";

const mapStateToProps = (state, action) => {
    return ({
        todayData: state.get("today"),
        weekData: state.get("week"),
    })
};

export default connect(mapStateToProps)(ForecastSection);
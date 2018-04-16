import { connect } from "react-redux";
import ForecastSection from "../components/ForecastSection";

//Pass state down to ForecastSection component as props
const mapStateToProps = (state, action) => {
    return ({
        error: state.get("error"),
        todayData: state.get("today"),
        weekData: state.get("week"),
    })
};

export default connect(mapStateToProps)(ForecastSection);
import { connect } from "react-redux";
import ForecastSection from "../components/ForecastSection";

const mapStateToProps = (state, action) => {
    return {
        weather: state.get("weather")
    }
};

export default connect(mapStateToProps)(ForecastSection);
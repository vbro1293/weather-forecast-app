import { connect } from "react-redux";
import TodaySection from "../components/TodaySection";

const mapStateToProps = (state, action) => {
    return {
        weather: state.get("weather")
    }
};

export default connect(mapStateToProps)(TodaySection);
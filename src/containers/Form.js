import { connect } from "react-redux";
import Form from "../components/Form";
import { getLocation } from "../data/actions/api"

//List of cities passed down as props to form
const mapStateToProps = (state, action) => {
    return ({
        locations: state.get("locations")
    })
};

//Wraps form component - onsubmit is passed down as a prop, location passed into api function get weather
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: location => dispatch(getLocation(location)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
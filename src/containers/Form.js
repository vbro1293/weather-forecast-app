import { connect } from "react-redux";
import Form from "../components/Form";
import { getLocation } from "../data/actions/api"

//Wraps component
//onsubmit is passed down as a prop, location passed into api function get weather
//This sets weather
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: location => dispatch(getLocation(location)),
    }
};

export default connect(null, mapDispatchToProps)(Form);
import axios from "../../axios";
import { fromJS } from "immutable";

import { setLocation } from "./state";

//get weather data from api, promise -> dispatch action to set weather to store
export const getLocation = ( location ) => dispatch => {
    axios.get("/location/"+ location).then(response => {
        const locationOb = fromJS(response.data[0].woeid);
        dispatch(setLocation(locationOb));
    })
}
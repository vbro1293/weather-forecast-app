import axios from "../../axios";
import { fromJS } from "immutable";

import { setLocation, setWeather } from "./state";

//get location data from api, promise -> dispatch action to set location to store
export const getLocation = ( location ) => dispatch => {
    axios.get("/location/"+ location).then(response => {
        const locationOb = fromJS(response.data[0]);
        dispatch(setLocation(locationOb));
    })
}

export const getWeather = ( locationID ) => dispatch => {
    axios.get("/weather/" + locationID).then(response => {
        const weatherOb = fromJS(response.data[0]);
        dispatch(setWeather(weatherOb));
    })
}
import axios from "../../axios";
import { fromJS } from "immutable";

import { setWeather } from "./state";

//get weather data from api, promise -> dispatch action to set weather to store
export const getWeather = ( location ) => dispatch => {
    axios.get("/"+ location).then(response => {
        const weather = fromJS(response.data);
        dispatch(setWeather(weather));
    })
}
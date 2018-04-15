import axios from "../../axios";
import { fromJS } from "immutable";
import { setWeather, error } from "./state";

//get location data from api, promise -> get weather using id, promise -> dispatch action to set weather object to store
export const getLocation = ( location ) => dispatch => {
    axios.get("/location/"+ location).then(response => {
        const locationID = fromJS(response.data[0].woeid);
        axios.get("/weather/" + locationID).then(response => {
            const weatherOb = fromJS(response.data);
            dispatch(setWeather(weatherOb));
        })
    }).catch(() => {
        dispatch(error());
    });
}
import moment from "moment-timezone";

//Function returns object which gets set to today property in state
const newToday = ({ weather }) => {
    //Convert immutable to JS object
    const weatherToday = weather.slice().toJS();
    
    //set local timezone, to show correct time
    moment.tz.setDefault(weatherToday.timezone);
    
    //Set consts of values req'd
    const location = weatherToday.title;
    const time = moment(weatherToday.time).format('llll');
    const curTemp = weatherToday["consolidated_weather"]["0"]["the_temp"];
    const curWeather = weatherToday["consolidated_weather"]["0"]["weather_state_name"];
    const sundown = moment(weatherToday.sun_set).fromNow();
    
    
    return ({
        location,
        time,
        curTemp,
        curWeather,
        sundown,
    })
}

//Function returns object which gets set to week property in state
const newWeek= ({ weather }) => {
    //Convert immutable to JS object
    const weatherToday = weather.toJS();
    const data = weatherToday["consolidated_weather"];
    
    //set local timezone, to show correct time
    moment.tz.setDefault(weatherToday.timezone);
    
    //Create arrays of the weeks temps
    const tempData = (temp) => (
        data.reduce((acc, val) => {
            acc.push(val[temp]);
            return acc;
        }, [])
    );
    const minTempData = tempData("min_temp");
    const maxTempData = tempData("max_temp");
    const avgTempData = tempData("the_temp");

    //Create array of X axis labels
    const datesXData = data.reduce((acc, val) => {
        acc.push(moment(val["applicable_date"]).format("MMM Do"));
        return acc;
    }, []);

    return ({
        minTempData,
        maxTempData,
        avgTempData,
        datesXData,
    })
}

//Set states called when action is called
const setWeek = (state, { weather }) => state.set("week", newWeek({ weather }));
const setToday = (state, { weather }) => state.set("today", newToday({ weather }));

const reducer = (state, action) => {
    switch(action.type){
        //Update today and week values in state, when api recieves data
        case "setWeather": return setWeek(setToday(state, action), action);
        default: return state;
    }
};

export default reducer;
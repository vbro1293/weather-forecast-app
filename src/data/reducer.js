import moment from "moment-timezone";

const newWeek= ({ weather }) => {
    //Copy of state, convert immutable to JS object
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
        minTempData: minTempData,
        maxTempData: maxTempData,
        avgTempData: avgTempData,
        datesXData: datesXData,
    })
}
const newToday = ({ weather }) => {//Copy of state, convert immutable to JS object
    const weatherToday = weather.slice().toJS();
    //Set consts of values req'd
    const location = weatherToday.title;
    const time = moment(weatherToday.time).format('llll');
    const curTemp = weatherToday["consolidated_weather"]["0"]["the_temp"];
    const curWeather = weatherToday["consolidated_weather"]["0"]["weather_state_name"];
    const sundown = moment(weatherToday.sun_set).fromNow();
    //set local timezone, to show correct time
    moment.tz.setDefault(weatherToday.timezone);
    return ({
        location: location,
        time: time,
        curTemp: curTemp,
        curWeather,
        sundown: sundown,

    })
}
const setWeek = (state, { weather }) => state.set("week", newWeek({ weather }));
const setToday = (state, { weather }) => state.set("today", newToday({ weather }));

const reducer = (state, action) => {
    switch(action.type){
        case "setWeather": return setWeek(setToday(state, action), action);
        default: return state;
    }
};

export default reducer;
const setLocation = (state, { location }) => state.set("location", location);
const setWeather = (state, { weather }) => state.set("weather", weather);

const reducer = (state, action) => {
    switch(action.type){
        case "setLocation": return setLocation(state, action);
        case "setWeather": return setWeather(state, action);
        default: return state;
    }
};

export default reducer;
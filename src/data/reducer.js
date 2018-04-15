const setWeather = (state, { weather }) => state.set("weather", weather);

const reducer = (state, action) => {
    switch(action.type){
        case "setWeather": return setWeather(state, action);
        default: return state;
    }
};

export default reducer;
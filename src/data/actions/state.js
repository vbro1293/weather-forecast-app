export const setLocation = location => {
    return {
        type: "setLocation",
        location: location,
    };
};

export const setWeather = weather => {
    return {
        type: "setWeather",
        weather: weather,
    };
};
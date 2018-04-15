export const setWeather = weather => {
    return {
        type: "setWeather",
        weather,
    };
};

export const error = () => {
    return {
        type: "error",
    };
};
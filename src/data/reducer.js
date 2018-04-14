const setLocation = (state, { location }) => state.set("location", location);

const reducer = (state, action) => {
    switch(action.type){
        case "setLocation": return setLocation(state, action);
        default: return state;
    }
};

export default reducer;
//Set up of initial store
import { Map, List } from "immutable";

const initial = Map({
    today: Map({}),
    week: Map({}),
    error: false,
    locations: List([
        "london", "bristol", "paris", "leicester", "bath", "new york", "newcastle"
    ]),
});

export default initial;
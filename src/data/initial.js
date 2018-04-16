//Set up of initial store
import { Map } from "immutable";

const initial = Map({
    today: Map({}),
    week: Map({}),
    error: false,
});

export default initial;
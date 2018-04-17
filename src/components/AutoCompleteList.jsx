import React from "react";

const AutoCompleteList = ({ list }) => (
    <ul>
        { list.map((item, id) => <li key={ id }>{ item }</li>) }
    </ul>
);

export default AutoCompleteList;
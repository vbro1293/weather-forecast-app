import React from "react";

const AutoCompleteList = ({ list, selected }) => (
    <ul>
        { list.map((item, id) => <li key={ id } onClick={ selected }>{ item }</li>) }
    </ul>
);

export default AutoCompleteList;
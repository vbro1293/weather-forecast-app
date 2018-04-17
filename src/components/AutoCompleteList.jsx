import React from "react";

const AutoCompleteList = ({ list, selected }) => {
    const shortList = list.slice(0, 5)
    return (
        <ul>
            { shortList.map((item, id) => <li key={ id } onClick={ selected }>{ item }</li>)}
        </ul>
    )
};

export default AutoCompleteList;
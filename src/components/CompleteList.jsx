import React from "react";

const CompleteList = ({ list }) => (
    <ul>
        { list.map((item, id) => <li key={ id }>{ item }</li>) }
    </ul>
);

export default CompleteList;
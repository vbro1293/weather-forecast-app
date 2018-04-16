import React from "react";

const Input = ({ onChange, value }) => (
    <input onChange={ onChange } value={ value } placeholder="Enter a city..."/>
);

export default Input;
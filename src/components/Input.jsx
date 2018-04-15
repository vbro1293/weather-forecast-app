import React from "react";

const Input = ({ onChange, value }) => (
    <input onChange={ onChange } value={ value } placeholder="Enter city..."/>
);

export default Input;
import React from "react";

const Button = ({ children, isDisabled }) => (
    <button disabled={ isDisabled }>{ children }</button>
);

export default Button;
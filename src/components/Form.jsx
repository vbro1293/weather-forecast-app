import React, { Component } from "react";

import Input from "./Input";
import Button from "./Button";

class Form extends Component{
    render(){
        return(
            <div>
                <Input />
                <Button>Submit</Button>
            </div>
        )
    }
}

export default Form;
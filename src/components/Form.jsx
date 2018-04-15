import React, { Component } from "react";

import Input from "./Input";
import Button from "./Button";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }

        /* Bind methods to this */
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
    }

    submit(e){
        // Prevent auto reload
        e.preventDefault();

        const location = this.state.input;
        this.props.onSubmit(location);
        // Reset input field
        this.setState({
            input: ""
        })
    }

    change(e){
        // Trim whitespace, remove any non alpha characters
        const curInput = e.target.value.trim().replace(/[^a-zA-Z]/, "");
        // Update local state with current input value
        this.setState({ 
            input: curInput,
        })
    }

    render(){
        return(
            <form onSubmit={ this.submit }>
                <Input value={ this.state.input } onChange={ this.change }/>
                <Button>Submit</Button>
            </form>
        )
    }
}

export default Form;
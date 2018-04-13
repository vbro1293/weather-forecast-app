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

        // Reset input field
        this.setState({
            input: ""
        })
    }

    change(e){
        // Update local state with current input value
        this.setState({ 
            input: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={ this.submit }>
                <Input value={ this.state.value } onChange={ this.change }/>
                <Button>Submit</Button>
            </form>
        )
    }
}

export default Form;
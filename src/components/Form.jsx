import React, { Component } from "react";

import Input from "./Input";
import Button from "./Button";
import CompleteList from "./CompleteList";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            list: [],
        }
        /* Bind methods to this */
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
    }

    submit(e){
        // Prevent auto reload
        e.preventDefault();
        //Remove multiple spaces and any whitespace at start and end 
        const location = this.state.input.replace(/ +/g, " ").trim();
        //Action onSubmit passed down as props from form container - passes location into action
        this.props.onSubmit(location);
        // Reset input field
        this.setState({
            input: ""
        })
    }

    change(e){
        // Remove any non alpha characters
        let curInput = e.target.value.replace(/[^a-zA-Z ]/, "");

        const { locations } = this.props;
        const options = locations.filter(location => location.includes(curInput));
        console.log(options);

        // Update local state with current input value
        this.setState({ 
            input: curInput,
        })
    }

    render(){
        return(
            <form onSubmit={ this.submit }>
                <Input value={ this.state.input } onChange={ this.change }/>
                <CompleteList list={ this.state.list }/>
                <Button isDisabled={ !this.state.input.trim() }>SUBMIT</Button>
            </form>
        )
    }
}

export default Form;
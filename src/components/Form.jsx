import React, { Component } from "react";
import { List } from "immutable";

import Input from "./Input";
import Button from "./Button";
import AutoCompleteList from "./AutoCompleteList";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            list: List([]),
        }
        /* Bind methods to this */
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.selectedItem = this.selectedItem.bind(this);
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
        //Get list of locations available, passed down from store
        const { locations } = this.props;
        // Remove any non alpha characters
        const curInput = e.target.value.replace(/[^a-zA-Z ]/, "");
        //Remove multiple spaces and any whitespace at start and end 
        const modCurInput = curInput.replace(/ +/g, " ").trim();

        // If any location matches input value, add to list, otherwise empty List. compare in lowercase as .includes() is case sensitive
        let list = modCurInput ? locations.filter(location => location.toLowerCase().includes(modCurInput.toLowerCase())) : List([]);
        
        // Update local state with current input value, set list of location matches if any
        this.setState({ 
            input: curInput,
            list: list,
        })
    }

    selectedItem(e){
        //If item clicked, set input to text content of clicked item
        this.setState({
            input: e.target.textContent,
            list: List([])
        })
    }

    render(){
        return(
            <form onSubmit={ this.submit }>
                <Input value={ this.state.input } onChange={ this.change }/>
                { this.state.list.size>0 ?
                    <AutoCompleteList list={ this.state.list } selected={ this.selectedItem }/>
                :
                    null
                }
                <Button isDisabled={ !this.state.input.trim() }>SUBMIT</Button>
            </form>
        )
    }
}

export default Form;
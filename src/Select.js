import React, { Component } from 'react'

export class Select extends Component {
    state = {value: 'Mango Juice'}

    handleChange = (e) =>{
        this.setState({value:e.target.value})
    }

    handleSubmit = (e) =>{
        alert('Your favorite drink is: ' + this.state.value);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favourite drink:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="Mango juice">Mango Juice</option>
                            <option value="Passion Juice">Passion Juice</option>
                            <option value="Cock tail">Cock Tail</option>
                            <option value="Yoghurt">Yoghurt</option>
                        </select>
                    </label>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}

export default Select

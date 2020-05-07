import React, { Component } from 'react'

export class TextArea extends Component {
    state = { value: 'Explain importance of Components in React' }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('You have submitted your essay: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Essay:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default TextArea

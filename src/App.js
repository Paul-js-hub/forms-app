import React, { Component } from 'react';
import TextArea from './TextArea';
import Select from './Select';

class App extends Component {

  state = { value: '' }
  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    alert('Thank you for submitting details ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <h1>Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <br />
        <TextArea />
        <br />
        <Select />
      </div>
    );
  }

}

export default App;

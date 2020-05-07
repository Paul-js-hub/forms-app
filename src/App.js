import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Forms</h1>
        <form>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }

}

export default App;

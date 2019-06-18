import React, { Component } from 'react';


class App extends Component {
  state = {
    greeting: 'Hello World',
  };
  render() {
    return (
      <div className="App">
        <h2>{this.state.greeting}</h2>
        <button onClick={this.greetTeam}>Greet</button>
      </div>
    );
  }

  greetTeam = () => {
    this.setState({ greeting: 'Hello Developers' });
  };


}





export default App;

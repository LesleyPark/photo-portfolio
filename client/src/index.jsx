import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Navbar from './components/Navbar.jsx';
// import Gallery from './components/Gallery.jsx';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render () {
//     return (
//       <div>
//         <div className="title"><h1>L E S L E Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P A R K</h1>
//           <div className="italics">
//             <h5>Photographer</h5>
//           </div>
//           <hr />
//           <Navbar />
//         </div>
//           <Gallery />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));

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
        <div className="title"><h1>L E S L E Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P A R K</h1>
          <div className="italics">
            <h5>Photographer</h5>
          </div>
          <hr />
          <Navbar />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
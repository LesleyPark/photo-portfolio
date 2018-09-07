import React from 'react';
import styles from '../stylesheets/Navbar.css';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div class="col-sm">
            <h5>About</h5>
          </div>
          <div class="col-sm">
            <h5>Photos</h5>
            &nbsp;&nbsp;Landscapes&nbsp;|&nbsp;Concert&nbsp;|&nbsp;Lifestyle&nbsp;|&nbsp;Food
          </div>
          <div class="col-sm">
            <h5>Social</h5>
            <a href="https://www.instagram.com/lesley.j.park/" target="_blank">
              <img className={styles.resize} src="https://s3-us-west-1.amazonaws.com/lpphotoportfolio/assets/insta.png" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
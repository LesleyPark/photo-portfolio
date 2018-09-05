import React from 'react';
import styles from '../stylesheets/Navbar.css';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className={styles.navbar}>
        Follow<br />
        Landscapes<br />
        Concert<br />
        Lifestyle<br />
        Food
      </div>
    );
  }
}

export default Navbar;
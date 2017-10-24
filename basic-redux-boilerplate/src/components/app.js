import React, { Component } from 'react';
import styles from './app.sass';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello <span className={styles.wonderful}>wonderful</span> world!</h1>
      </div>
    )
  }
}
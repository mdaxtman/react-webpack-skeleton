import React, { Component } from 'react';
import styles from './blah.css';
import catPic from './cat.jpg';

export default class Blah extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.abc}>hot, hot reload!</h1>
        <img src={`${catPic}`}/>
      </div>

    );
  }
}

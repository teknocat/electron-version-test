// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { remote } from 'electron';
import routes from '../constants/routes';
import styles from './Home.css';

const { app } = remote;

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <p>version {app.getVersion()}</p>
      </div>
    );
  }
}

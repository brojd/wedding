import React, {Component} from 'react';
import styles from './App.stylesheet.css';
import WeddingContainer from '../../containers/Wedding/Wedding.container';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <WeddingContainer />
      </div>
    )
  }
}

export default App;

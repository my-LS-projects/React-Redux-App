import React from 'react';
import './App.css';

import { connect } from 'react-redux'

function App() {
  return (
    <div className='App'>
      <h1>hello</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  {}
)(App)

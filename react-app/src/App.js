import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className='App'>
      <CharacterList />
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

import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Breaking Bad React App</h1>
      </header>
      <main>
        <CharacterList />
      </main>
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

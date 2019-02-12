import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import SummaryC from './components/Summary-ES6 classes'
import SummaryF from './components/Summary-Functional Component'
import SummaryS from './components/Summary-Static Propeties'

class App extends Component {
  render() {
    return (
      <div>
        <SummaryC title="Peanut Butter and Jelly"
                  ingredients="peanut butter, jelly, bread"
                  steps="spread peanut butter and jelly between bread" />,
        <SummaryF />
        <SummaryS />
      </div>
    )
  }
}

export default App;

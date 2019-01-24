import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'

//import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;

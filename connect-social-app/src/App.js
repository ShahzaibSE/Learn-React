import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// Components.
import {SignUpComponent} from './signup-component/signup.component';
import LoginRegisterTabs from './login-register-container.component/login-register-container.component';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LoginRegisterTabs/>
      {/* <SignUpComponent/> */}
    </div>
  );
}

export default App;

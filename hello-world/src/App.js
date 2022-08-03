import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className="App">
      <Message />
      {/* <Greet name="Bruce" heroname="Batman">
        <p>This is Children Props</p>      
      </Greet>
      <Greet name="Diana" heroname="Wonder Woman">
        <button>Button</button>
      </Greet>
      <Greet name="Clark" heroname="Superman" />

      <Welcome name="Bruce" heroname="Batman" />
      <Welcome name="Diana" heroname="Wonder Woman" />
      <Welcome name="Clark" heroname="Superman" /> */}

    </div>
    )
  }
}

export default App;

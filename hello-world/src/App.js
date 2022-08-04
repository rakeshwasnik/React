import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import { Component } from 'react';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'

class App extends Component {
  render() {
    return(
      <div className="App">

        <EventBind />

        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter />  */}
      {/* <Message /> */}
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

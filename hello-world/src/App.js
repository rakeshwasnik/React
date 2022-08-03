import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroname="Batman">
        <p>This is Children Props</p>      
      </Greet>
      <Greet name="Diana" heroname="Wonder Woman">
        <button>Button</button>
      </Greet>
      <Greet name="Clark" heroname="Superman" />

      <Welcome name="Bruce" heroname="Batman" />
      <Welcome name="Diana" heroname="Wonder Woman" />
      <Welcome name="Clark" heroname="Superman" />

    </div>
  );
}

export default App;

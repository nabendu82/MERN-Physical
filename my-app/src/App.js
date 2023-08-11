import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greeting name="JavaScript">Language of the Web</Greeting>
      <Greeting name="Golang" />
      <Greeting name="Swift" />
      <hr />
      <Welcome name="Java" type="OOP" />
      <Welcome name="C" type="FP" />
      <Welcome name="Flutter" type="OOP">Language for cross mobile development</Welcome>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Session1 from './Components.js/Session1';
import InputName from './Components.js/InputName';
import NamePrint from './Components.js/NamePrint';
import Count from './Components.js/Count';



function App() {
  return (
    <div className="App">
      <Session1/>
      {/* <InputName/> */}
      <NamePrint/>
      <Count/>
    </div>
  );
}

export default App;

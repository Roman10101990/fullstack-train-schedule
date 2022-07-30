import './App.css';
import Header from './components/Header/Header.js';
import StartPoint from './components/StartPoint/StartPoint.js';
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <Header />
      <StartPoint />
      <Schedule />
    </div>
  );
}

export default App;
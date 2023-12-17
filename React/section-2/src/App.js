import './App.css';
import Welcome from './components/Welcome';
import Welcomeclass from './components/Welcomeclass';

function App() {
  return (
    <div className="App">
      <Welcome name="ahmed" age="30" title="div tools" />
      <Welcomeclass name="amen" />
    </div>
  );
}

export default App;

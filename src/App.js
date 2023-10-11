import './App.css';
import Weather from './weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather/>
        <p className='footer'>Coded by <a href="https://www.shecodes.io/graduates/83359-yordanos-girma" target='blank'>Yordanos Girma</a> and open-source at <a href="https://github.com/yordigenet/react-weather-app" target='blank'>Github</a></p>
      </header>
    </div>
  );
}

export default App;

import Svgs from './components/svgs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <svg className="reddit" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
        <use href="#redditVector" xlinkHref="#redditVector" />
      </svg>
      </header>
      <Svgs />
    </div>
  );
}

export default App;

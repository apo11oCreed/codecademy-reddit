import Svgs from './components/svgs';
import Search from './components/search';
import './static/css/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
        <use href="#redditVector" xlinkHref="#redditVector" />
      </svg>
      <Search />
      </header>
      <Svgs />
    </div>
  );
}

export default App;

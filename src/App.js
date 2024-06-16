import logo from './logo.svg';  // Imports the logo image file
import './App.css';  // Imports the CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Displays the logo image */}
        <p>
         Wow! React reacting😂😂🎈
        </p> {/* Displays a paragraph with editing instructions */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> {/* Displays a link to learn more about React */}
      </header>
    </div>
  );
}

export default App;  // Exports the App component as the default export

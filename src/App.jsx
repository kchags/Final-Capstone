import React, { useState } from 'react';
import Main from './Components/Main';
import './Components/style.css';
import { SearchBar } from "./Components/SearchBar";
import { SearchResultsList } from "./Components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <><>
      <Main />
    </><div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
      </div></>
  );
}

export default App; 

//something in here is breaking the app and i dont know why please help!!
// Compiled with problems:
// ×
// ERROR in ./src/App.jsx 9:0-67
// Module not found: Error: Can't resolve './Components/SearchResultsList' in '/Users/kevinchagas/Projects/Capstone/Pokemon/src'

import React, { useState } from 'react';
import Main from './Components/Main';
import './Components/style.css';
import SearchBar from './Components/SearchBar';
import SearchResultsList from 'react'
import "./App.css";

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

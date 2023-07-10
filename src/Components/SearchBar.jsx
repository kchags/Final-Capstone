import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://pokeapi.co/api/v2/")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
            //every time i type in the search bar i get an error saying that json.filter is not a function
            //whenever i click a pokemon card, i cant click in the search bar after. i have to refresh to click in the search bar
            //i am getting two search bars. one up top and one on the bottom. the search bar at the bottom is not having the issue where i click on a card and i can't click back into the search bar. but both search bars have the json.filter is not a function error.
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

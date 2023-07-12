import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"

const SearchBar = ({ setResults }) => { // Accept setResults as a prop
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    setResults([]); // Reset the results
    fetchData(value);
  };

  const fetchData = (value) => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(value.toLowerCase())
        );
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]); // Reset the results in case of an error
      });
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

export default SearchBar;



// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "./SearchBar.css";

// export const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   // const fetchData = (value) => {
//   //   fetch("https://pokeapi.co/api/v2/")
//   //     .then((response) => response.json())
//   //     .then((json) => {
//   //       const results = json.filter((user) => {
           
//   //         return (
//   //           value &&
//   //           user &&
//   //           user.name &&
//   //           user.name.toLowerCase().includes(value)
//   //         );
//   //       });
//   //       setResults(results);
//   //     });
//   // };

//   const fetchData = (value) => {
//     fetch("https://pokeapi.co/api/v2/pokemon/")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.results.filter((pokemon) =>
//           pokemon.name.toLowerCase().includes(value.toLowerCase())
//         );
//         setResults(results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setResults([]);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     <div className="input-wrapper">
//       <FaSearch id="search-icon" />
//       <input
//         placeholder="Type to search..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//     </div>
//   );
// };


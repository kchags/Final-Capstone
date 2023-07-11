import "./SearchResult.css";
import React from "react";
import useHistory from "react-router-dom";

export const SearchResult = ({ result, onSelectPokemon }) => {
  const history = useHistory();

  const handleSelect = () => {
    onSelectPokemon(result); // Call the onSelectPokemon function passed as a prop
    history.push(`/pokemon/${result.name}`); // Redirect to the selected Pokémon's card
  };

  return (
    <div className="search-result" onClick={handleSelect}>
      {result.name}
    </div>
  );
};

export default SearchResult;







// import "./SearchResult.css";
// import React from "react";
// import { useHistory } from "react-router-dom";

// export const SearchResult = ({ result }) => {
//   const history = useHistory();

//   const handleSelect = () => {
//     history.push(`/pokemon/${result}`); // Replace with your desired route path
//   };

//   return (
//     <div className="search-result" onClick={handleSelect}>
//       {result}
//     </div>
//   );
// };

// export default SearchResult;









// export const SearchResult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(_e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResultsLists from "./SearchResultsLists";
import useHistory from "react-router-dom"; // Import useHistory from react-router-dom

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory(); // Initialize useHistory

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        setPokeData((state) => {
          state = [...state, result.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      })
    );
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  const handleSearch = (value) => {
    const filteredResults = pokeData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSelectPokemon = (pokemon) => {
    history.push(`/pokemon/${pokemon.name}`); // Redirect to the selected Pokémon's card
  };

  return (
    <>
      <div className="container">
        <div className="left-content">
          <SearchBar setResults={setSearchResults} /> {/* Pass setResults function as a prop */}
          {searchResults.length > 0 ? (
            <SearchResultsLists
              results={searchResults}
              onSelectPokemon={handleSelectPokemon} // Pass onSelectPokemon function as a prop
            />
          ) : (
            <Card pokemon={pokeData} loading={loading} infoPokemon={setPokeDex} />
          )}

          <div className="btn-group">
            {prevUrl && (
              <button onClick={() => setUrl(prevUrl)}>Previous</button>
            )}
            {nextUrl && <button onClick={() => setUrl(nextUrl)}>Next</button>}
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Main;



// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import axios from "axios"
// import { SearchBar } from "./SearchBar";

// const Main = () => {
//     const [pokeData, setPokeData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
//     const [nextUrl, setNextUrl] = useState();
//     const [prevUrl, setPrevUrl] = useState();
//     const [pokeDex, setPokeDex] = useState();

//     const pokeFun = async () => {
//         setLoading(true)
//         const res = await axios.get(url);
//         //console.log(res.data.results)
//         setNextUrl(res.data.next);
//         setPrevUrl(res.data.previous);
//         getPokemon(res.data.results)
//         setLoading(false)
//         //console.log(pokeData)
//     }
//     const getPokemon = async (res) => {
//         res.map(async (item) => {
//             const result = await axios.get(item.url)
//             //console.log(result.data)
//             setPokeData(state => {
//                 state = [...state, result.data]
//                 state.sort((a, b) => a.id > b.id ? 1 : -1)
//                 return state;
//             })
//         })
//     }
//     useEffect(() => {
//         pokeFun();
//     }, [url]);
//     return (
//         <>
//             <div className="container">
//                 <div className="left-content">
//                     <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />

//                     <div className="btn-group">
//                         {prevUrl && <button onClick={() => {
//                             setPokeData([])
//                             setUrl(prevUrl)
//                         }}>Previous</button>}

//                         {nextUrl && <button onClick={() => {
//                             setPokeData([])
//                             setUrl(nextUrl)
//                         }}>Next</button>}

//                     </div>
//                 </div>
//                 <div className="right-content">
//                     <Pokeinfo data={pokeDex} />
//                 </div>
//                 <div classname='App'>
//                     <SearchBar />
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Main;







// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import axios from "axios";
// import SearchBar from "./SearchBar";
// import SearchResultsLists from "./SearchResultsLists"; // Update the import statement
// import { useHistory } from "react-router-dom";

// const Main = () => {
//   const [pokeData, setPokeData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
//   const [nextUrl, setNextUrl] = useState();
//   const [prevUrl, setPrevUrl] = useState();
//   const [pokeDex, setPokeDex] = useState();
//   const [searchResults, setSearchResults] = useState([]);
//   const history = useHistory(); // Initialize useHistory

//   const pokeFun = async () => {
//     setLoading(true);
//     const res = await axios.get(url);
//     setNextUrl(res.data.next);
//     setPrevUrl(res.data.previous);
//     getPokemon(res.data.results);
//     setLoading(false);
//   };

//   const getPokemon = async (res) => {
//     await Promise.all(
//       res.map(async (item) => {
//         const result = await axios.get(item.url);
//         setPokeData((state) => {
//           state = [...state, result.data];
//           state.sort((a, b) => (a.id > b.id ? 1 : -1));
//           return state;
//         });
//       })
//     );
//   };

//   useEffect(() => {
//     pokeFun();
//   }, [url]);

//   const handleSearch = (value) => {
//     const filteredResults = pokeData.filter((pokemon) =>
//       pokemon.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };

  

//   return (
//     <>
//       <div className="container">
//         <div className="left-content">
//           <SearchBar setResults={setSearchResults} /> {/* Pass setResults function as a prop */}
//           {searchResults.length > 0 ? (
//             <SearchResultsLists results={searchResults} />
//           ) : (
//             <Card pokemon={pokeData} loading={loading} infoPokemon={setPokeDex} />
//           )}

//           <div className="btn-group">
//             {prevUrl && (
//               <button onClick={() => setUrl(prevUrl)}>Previous</button>
//             )}
//             {nextUrl && <button onClick={() => setUrl(nextUrl)}>Next</button>}
//           </div>
//         </div>
//         <div className="right-content">
//           <Pokeinfo data={pokeDex} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;






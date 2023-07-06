import React, { useState } from 'react'


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const pokemon = [
        { name: "https://pokeapi.co/api/v2/pokemon/" }
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        pokemon.filter((pokemon) => {
            return pokemon.name.match(searchInput);
        });
    }

    return <div>

        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />

        <table>
            <tr>
                <th>Pokemon</th>
            </tr>

            {pokemon.map((pokemon) => {

                <div>
                    <tr>
                        <td>{pokemon.name}</td>
                    </tr>
                </div>

            })}
        </table>

    </div>


};

export default SearchBar;
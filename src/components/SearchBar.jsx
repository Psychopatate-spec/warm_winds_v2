import React, { useState } from "react";

function SearchBar({ handleSearch }) {

    const [input, setInput] = useState("")

    return (
        <div className="SearchBar">
            <input 
                id="city" 
                type="text" 
                value={input}
                placeholder="Enter a city's name here..."
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            />
            <button 
                id="handleSearch" 
                type="submit" 
                onClick={(e) => {
                    handleSearch(input)
                }}>
                Search
            </button>
        </div>
    )
}

export default SearchBar
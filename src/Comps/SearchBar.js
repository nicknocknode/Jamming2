import React from "react";
import '../App.css';

function SearchBar({currentSearch, searchSetter}){

    function changeHandler({target}){
        searchSetter(target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <form id='search' onSubmit={handleSubmit}>
            <input id="searchbar" placeholder="useme" value={currentSearch} onChange={changeHandler} />
            <div>
            <input type='submit' disabled={!currentSearch} />
            <button onClick={()=>{searchSetter('')}}>reset</button>
            </div>

        </form>
    )
}

export default SearchBar;
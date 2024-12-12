import React, {useState} from "react";
import '../App.css';

function SearchBar(){
    const [search, setSearch] = useState()

    function changeHandler({target}){
        setSearch(target.value)
        console.log(target.value)
    }

    return (
        <div id='search'>
            <input value={search} onChange={changeHandler} />
        </div>
    )
}

export default SearchBar;
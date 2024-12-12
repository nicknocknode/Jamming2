import React from "react";
import '../App.css';

function Track(props){
    const {id, name, artist, album} = props //passed in being mapped

    return (
        <div className='track'>
            <div className="trackContainer">
                 <h2>{name}</h2><h3>{artist}</h3>
            </div>
            <div className="trackContainer">
                <p>{album}</p><p>{id}</p>
            </div>
        {props.children}
        </div>
    )
}

export default Track
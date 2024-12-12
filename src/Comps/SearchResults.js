import React from "react";
import Track from "./Track";
import '../App.css';

function SearchResults({tracks, setTracks, setPltracks, currentSearch}){

    function onAdd(e){
        setTracks(prev => prev.filter(track => track.name !== e.target.value))
        const trackIndex = tracks.findIndex(track => track.name === e.target.value)
        setPltracks(prev => [...prev, tracks[trackIndex]])
    }


    function filteredTracks(trackstocheck){
        let returntracks = []
        
        trackstocheck.forEach(track => {
            if(track.name){
                if(track.name.includes(currentSearch)){
                    returntracks.push(track) 
                     }
            }

        })
        return returntracks
    }

    tracks = filteredTracks(tracks)

 return (
    <div className="tracklist">
        {tracks.map((track, key) => {
            return <Track key={key} id={track.id} name={track.name} artist={track.artist} album={track.album}><button value={track.name} onClick={onAdd}>test</button></Track>
        })}
    </div>
 )
}

export default SearchResults
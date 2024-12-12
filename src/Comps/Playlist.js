import React from "react";
import Track from "./Track";

function PlayList({tracks, setTracks, setPltracks, setPL, playName, setPlayName}){

    function handleSubmit(e){
        e.preventDefault()
        const playlistobj = [{playlistname:playName}]

        tracks.forEach(element => {
            playlistobj.push(element)
        });
        console.log(playlistobj)

        for(let i = 0;i < tracks.length;i++){
            setTracks(prev => [...prev, tracks[i]])
        }

        setPltracks([])
        setPL(JSON.stringify(playlistobj))
    }

    function onAdd(e){
        setPltracks(prev => prev.filter(track => track.name !== e.target.value))
        const trackIndex = tracks.findIndex(track => track.name === e.target.value)
        setTracks(prev => [...prev, tracks[trackIndex]])
    }

    return (
        <div className="tracklist">
            <form onSubmit={handleSubmit}>
                <input id="playlist" placeholder="nameTrack" value={playName} onChange={(e)=>{setPlayName(e.target.value)}}/>
                <input type="submit" />
            </form>
        {tracks.map((track, id) => {
            return <Track key={id} id={track.id} name={track.name} artist={track.artist} album={track.album}><button value={track.name} onClick={onAdd}>test</button></Track>
        })}
    </div>
    )
}

export default PlayList
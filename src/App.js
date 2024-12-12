import SearchBar from './Comps/SearchBar';
import SearchResults from './Comps/SearchResults';
import './App.css';
import React, { useState } from 'react';
import PlayList from './Comps/Playlist';


function App() {

  const [playName, setPlayName] = useState('')
  const [playList, setPlaylist] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [pltracks, setPltracks] = useState([])
  const [tracks, setTracks] = useState([
    {
      id:1,
      name:'song1',
      artist:'jd',
      album:'america'
    },
    {
      id:2,
      name:'song2',
      artist:'jd',
      album:'america'
    },
    {
      id:3,
      name:'song3',
      artist:'jd',
      album:'america'
    },
    {
      id:1,
      name:'song1',
      artist:'jd',
      album:'america'
    },
    {
      id:2,
      name:'song2',
      artist:'jd',
      album:'america'
    }
  ])
  


  return (
    <div>
      <header className="App-header">
        <h1>Jamming2</h1>
        <button style={{padding:'10px', borderRadius:'10px'}}>log in to spotify</button>
      </header>
      <SearchBar currentSearch={searchTerm} searchSetter={setSearchTerm}/>
      <div className='container'>
      <SearchResults currentSearch={searchTerm} tracks={tracks} setTracks={setTracks} setPltracks={setPltracks}/>
      <PlayList setPlayName={setPlayName} playName={playName} setPL={setPlaylist} tracks={pltracks} setTracks={setTracks} setPltracks={setPltracks}/>
      </div>
      <div>
        <h2 id='playobj'>{playList}</h2>
      </div>
    </div>
  );
}

export default App;

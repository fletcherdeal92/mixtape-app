import React from 'react';
import '../css/Main.css';




function Songlist(props) {
    const songs = props.songs;
    const songList = songs.map((song) =>
        <li>{song}</li>
    );
    return(
        <div className="songlist">
            <h2><span>Track</span>_list</h2>
            <ul>
                {songList}
            </ul>
        </div>
    )
}

export default Songlist;
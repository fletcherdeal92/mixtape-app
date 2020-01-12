import React from 'react';
import '../css/Main.css';

function Playlists(props) {
    const ListItems = props.playlists;
    const playlistList = ListItems.map((playlist) =>
        <li>{playlist}</li>
    );
    return(
        <div className="playlist">
            <h2><span>Select</span>_tape</h2>
            <ul>{playlistList}</ul>
        </div>
    )
}

export default Playlists;
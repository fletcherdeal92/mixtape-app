import React from 'react';
import '../css/Main.css';

function Playlists(props) {
    let Playlists = this.props.playlists ? this.props.playlists : [];
    // const playlistList = ListItems.map((playlist.name) =>
    //     <li>{playlist}</li>
    // );
    return(
        <div className="playlist">
            <h2><span>Select</span>_tape</h2>
            {/* <ul>{playlistList}</ul> */}
        </div>
    )
}

export default Playlists;
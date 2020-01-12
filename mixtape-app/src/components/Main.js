import React from 'react';
import Playlists from './Playlists';
import Songlist from './Songlist';
import '../css/Main.css';
import playerImg from '../imgs/player.svg';

function Main() {
    return(
        <div className="Main">
            <Playlists playlists={playlists}/>
            <div className="player">
                <img src={playerImg} alt="'player" />
            </div>
            <Songlist songs={songs}/>
        </div>
    )
}

const songs = ['Song 1', 'Song 2', 'Song 3', 'Song 4'];
const playlists = ['playlist 1', 'playlist 2'];

export default Main;
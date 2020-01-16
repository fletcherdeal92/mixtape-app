import React, { Component } from 'react';
import Playlists from './Playlists';
import Songlist from './Songlist';
import '../css/Main.css';
//import playerImg from '../imgs/player.svg';

const MusicKit = window.MusicKit;

MusicKit.configure({
    developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQ1RFFMUTk2NkYifQ.eyJpYXQiOjE1NzkxNDg1NDQsImV4cCI6MTU5NDcwMDU0NCwiaXNzIjoiOUE0M1ZKTFZFOCJ9.4dJKKnVXtwFyb-ejfK0N-SO66PtmcSe_Zb53UDZMt5JIldVRgauquuOb8N7np598rXZCwDxcJkjBV9_JkX2azw',
    app: {
    name: 'app-name',
    build: '0000'
    }
});

let music = MusicKit.getInstance();

class Main extends Component {

    render() {
       let playlists = this.props.playlists;

        return(
            <div className="Main">
                <Playlists playlists={playlists}/>
                <div className="player">
                    {/* <img src={playerImg} alt="'player" /> */}
                </div>
                <Songlist songs={songs}/>
            </div>
        )
    }
}

const songs = ['Song 1', 'Song 2', 'Song 3', 'Song 4'];
const playlists = ['playlist 1', 'playlist 2'];

export default Main;
import React from 'react';
import '../css/Nav.css';

const MusicKit = window.MusicKit;

MusicKit.configure({
    developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQ1RFFMUTk2NkYifQ.eyJpYXQiOjE1NzkxNDg1NDQsImV4cCI6MTU5NDcwMDU0NCwiaXNzIjoiOUE0M1ZKTFZFOCJ9.4dJKKnVXtwFyb-ejfK0N-SO66PtmcSe_Zb53UDZMt5JIldVRgauquuOb8N7np598rXZCwDxcJkjBV9_JkX2azw',
    app: {
    name: 'app-name',
    build: '0000'
    }
});

let music = MusicKit.getInstance();

function NavBar() {
    return (
        <nav>
            <h1 className="logo"><span>Mixtape</span>_app</h1>
            <div className="buttons">
            <button>Create tape</button>
            <button onClick={music.authorize()} className="signIn">Sign in with ___</button>
            </div>
        </nav>
    )
}

export default NavBar;
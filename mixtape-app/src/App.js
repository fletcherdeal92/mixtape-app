import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './css/App.css';

const MusicKit = window.MusicKit;

let developerToken = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQ1RFFMUTk2NkYifQ.eyJpYXQiOjE1NzkxNDg1NDQsImV4cCI6MTU5NDcwMDU0NCwiaXNzIjoiOUE0M1ZKTFZFOCJ9.4dJKKnVXtwFyb-ejfK0N-SO66PtmcSe_Zb53UDZMt5JIldVRgauquuOb8N7np598rXZCwDxcJkjBV9_JkX2azw';

MusicKit.configure({
    developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQ1RFFMUTk2NkYifQ.eyJpYXQiOjE1NzkxNDg1NDQsImV4cCI6MTU5NDcwMDU0NCwiaXNzIjoiOUE0M1ZKTFZFOCJ9.4dJKKnVXtwFyb-ejfK0N-SO66PtmcSe_Zb53UDZMt5JIldVRgauquuOb8N7np598rXZCwDxcJkjBV9_JkX2azw',
    app: {
    name: 'app-name',
    build: '0000'
    }
});

let music = MusicKit.getInstance();
let userToken = music.api.userToken;

const url = 'https://api.music.apple.com/v1/me/library/playlists';

const options = {
  headers: {
    'Music-User-Token': userToken,
    Authorization: 'Bearer ' + developerToken
  }
};

let serverData;

class App extends Component {

  constructor() {
    super();
    //calling an initial serverData that is empty
    this.state = 
    {playlists: {}
    }
  }

  componentDidMount() {
    fetch(url, options)
      .then(res => res.json())
      .then(data => this.setState({playlists: data.data}));
  }

  render() {
    let playlistsToRender = this.state.playlists ? this.state.playlists : [];
    console.log(playlistsToRender);

     return (
      <div className="App">
        <Navbar />
        <Main playlists={playlistsToRender} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import '../css/Nav.css';

function NavBar() {
    return (
        <nav>
            <h1 className="logo"><span>Mixtape</span>_app</h1>
            <div className="buttons">
            <button>Create tape</button>
            <button className="signIn">Sign in with ___</button>
            </div>
        </nav>
    )
}

export default NavBar;
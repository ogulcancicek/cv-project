import React from "react";
import '../styles/app.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <i className="fa-solid fa-briefcase header-logo"></i>
                <h1>CV Generator</h1>
            </header>
        );
    }
}

export default Header;
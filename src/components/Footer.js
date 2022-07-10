import React from "react";
import '../styles/app.css';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <p className="footer-text">Copyright © 2022 
                    <a href="https://github.com/ogulcancicek" className="footer-link">
                        ogulcancicek
                    </a>
                </p>
            </footer>
        );
    }
}

export default Footer;
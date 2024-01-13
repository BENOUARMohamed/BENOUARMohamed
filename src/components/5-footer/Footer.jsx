import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <footer className="flex">
            <ul className="flex">
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <p className="paragraphe">© 2023 BENOUAR Mohamed. All rights reserved.</p>

        </footer>
    );
}
export default Footer;

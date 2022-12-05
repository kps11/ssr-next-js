import React from 'react';
import headerStyle from "../styles/Header.module.css"
function Header(props) {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>WebDev</span>
            </h1>
            <p className={headerStyle.description}>
                Keep up to date with the latest web dev news
            </p>
            
        </div>
    );
}

export default Header;
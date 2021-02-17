import React from 'react';

function Nav() {

    return (
        <header>
            <h2>
                <a href="/">
                    Danielle Branton
    </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Porfolio</a>
                    </li>
                    <li>
                        <a href="#resume">
                            Resume </a>
                    </li>
                    <li>
                        <a href="#contact">
                            About Me </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
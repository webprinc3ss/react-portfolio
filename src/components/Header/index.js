import React from 'react';
import coverImage from '../../assets/img/pixels4.png';

function Header() {
    return (
        <header>
            <div class="head-container">
                <h1 class="right">
                    <a href="/">Dani codes</a><img src={coverImage} style={{ height: "30px", width: "30px" }} alt="pixels" />
                </h1>
                <nav>
                    <a href="/about">About</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/contact">Contact</a>
                    <a href="/resume">Resume</a>
                </nav>
            </div>
        </header>

    )
}
export default Header;
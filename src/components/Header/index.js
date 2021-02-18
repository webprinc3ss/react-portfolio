import React from 'react';
import Nav from '../Nav';
import coverImage from '../../assets/img/pixels4.png';

function Header() {
    return (
        <header>
            <div class="head-container">
                <h1 class="right">
                    <a href="/">Dani codes</a><img src={coverImage} style={{ height: "30px", width: "30px" }} alt="pixels" />
                </h1>
                <Nav></Nav>
            </div>
        </header>

    )
}
export default Header;
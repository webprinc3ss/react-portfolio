import React, { useEffect } from 'react';
import coverImage from '../../assets/img/pixels4.png';


class Nav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="head-container">
                    <h1 class="right">
                        <a href="/">Dani codes</a><img src={coverImage} style={{ height: "30px", width: "30px" }} alt="pixels" />

                    </h1>
                    <nav>
                        <ul className="flex-row">
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                            <li>Resume</li>
                        </ul>
                    </nav></div>
            </React.Fragment>
        );
    }
}

export default Nav;
import React from 'react';
import coverImage from '../../assets/img/pixels4.png';


function Nav(props) {
    const links = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <div className="head-container">
            <h1 class="right">
                <a href="/">Dani codes</a><img src={coverImage} style={{ height: "30px", width: "30px" }} alt="pixels" />
            </h1>
            <nav>
                <ul className="flex-row">
                    {links.map(link => (
                        <li key={link}>
                            <a href={'#' + link.toLowerCase()}
                                onClick={() => this.props.handlePageChange(link)}
                                className={
                                    props.currentPage === link ? 'nav-link active' : 'navlink'
                                }
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
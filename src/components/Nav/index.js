import React, { useEffect } from 'react';
import coverImage from '../../assets/img/pixels4.png';


class Nav extends React.Component {
    render() {
        const links = ['About', 'Porfolio', 'Contact', 'Resume'];
        return (
            <React.Fragment>
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
                                            this.props.currentPage === link ? 'nav-link active' : 'navlink'
                                        }
                                    >
                                        {link}
                                    </a>
                                </li>

                            ))}
                        </ul>
                    </nav></div>
            </React.Fragment>
        );
    }
}

export default Nav;
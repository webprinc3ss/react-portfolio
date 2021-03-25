import React from 'react';
import coverImage from '../../assets/img/pixels4.png';
import { mergeAndLowerCaseWords } from '../../utils/helpers';


function Nav(props) {
    const { navPages = [], setCurrentPage, currentPage } = props;


    return (
        <div className="head-container">
            <h1 className="right">
                <a href="/">Dani codes</a><img src={coverImage} style={{ height: "30px", width: "30px" }} alt="pixels" />
            </h1>
            <nav>
                <ul className="flex-row navUl">
                    {navPages.map((link) => (
                        <li key={link.name}>
                            <a
                                // href={'#' + mergeAndLowerCaseWords(link.name)} 
                                // cursor-pointer
                                className={currentPage.name === link.name && 'navLink active'}
                                onClick={() => {
                                    setCurrentPage(link);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
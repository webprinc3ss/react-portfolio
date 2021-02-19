import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { navPages = [], setCurrentPage, currentPage } = props;


    return (
        <header>
            <Nav navPages={navPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}>
            </Nav>
        </header >
    )
}
export default Header;
import React from 'react';
import Nav from '../Nav';
// import About from '../About';
// import Portfolio from '../Portfolio';
// import Contact from '../Contact';
// import Resume from '../Resume';


function Header(props) {
    const { links = [], setCurrentNavLink, currentNavLink } = props;
    // const [currentPage, handlePageChange] = useState('Nav');
    // // const renderPage = (Nav) => {
    //     // Add a switch statement that will return the appropriate component of the 'currentPage'
    //     // YOUR CODE HERE
    //     //
    //     switch (Nav) {
    //         case 'Contact':
    //             return <Contact></Contact>;
    //         case 'Portfolio':
    //             return <Portfolio></Portfolio>;
    //         case 'Resume':
    //             return <Resume></Resume>;
    //         default:
    //             return <About></About>;
    //     }
    // };

    return (
        <header>
            <Nav links={links}
                setCurrentNavLink={setCurrentNavLink}
                currentNavLink={currentNavLink}>
            </Nav>

            {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            {
                // renderPage(currentPage)
            }
        </header >

    )
}
export default Header;
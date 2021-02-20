// import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [navPages] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    },]);
  console.log(navPages);


  const [currentPage, setCurrentPage] = useState(navPages[0]);
  console.log(currentPage);
  console.log(setCurrentPage);
  console.log(navPages);

  // Add a switch statement that will return the appropriate component of the 'currentPage'
  // YOUR CODE HERE
  const renderPage = (currentPage) => {
    switch (currentPage) {
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header
        navPages={navPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Header>
      <main>
        {renderPage(currentPage.name)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

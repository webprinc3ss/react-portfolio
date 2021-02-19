// import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([About, Portfolio, Contact, Resume]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // const [items, currentPage, handlePageChange] = useState(items[0]);

  // Add a switch statement that will return the appropriate component of the 'currentPage'
  // YOUR CODE HERE
  const renderPage = () => {
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
        {displayComponent(currentPage)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

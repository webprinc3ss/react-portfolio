import React from 'react';
import daniImage from '../../assets/img/me.jpg';

function About() {
    return (
        <section id="container">

            <h2>Welcome</h2><br></br>
            <p className="center"><img className="dani-image" src={daniImage} alt="Me" /></p>
            <div className="about-container"><p><br></br>
            My background is web design and website administration. My strengths include matching a technology with a need and the ability to integrate the solution. Now I can develop with these technologies and am happy to share my latest projects on my journey to full stack web developer!
            </p></div>
        </section>
    )
}

export default About;
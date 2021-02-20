import React from 'react';
import daniImage from '../../assets/img/me.jpg';

function About() {
    return (
        <section>

            {/* <h2>Welcome</h2> */}
            <p className="center"><img className="dani-image" src={daniImage} alt="Me" /></p>
            <p>
                Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
                blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
                blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
                blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
                blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
                blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
                blah blah blah Blah blah blah blah blah Blah blah blah blah blah
            </p>
        </section>
    )
}

export default About;
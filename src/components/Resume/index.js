import React from 'react';
import laptop from '../../assets/img/laptop.png';

function Resume() {
    return (
        <section>

            <h2>Resume</h2>

            <p><a href="#">View</a>
            </p>

            <img src={laptop} alt="laptop" className="laptop" />

        </section>
    )
}

export default Resume;
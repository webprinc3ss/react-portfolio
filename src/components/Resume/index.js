import React from 'react';

function Resume() {
    return (
        <section id="container">

            <h2>Resume</h2>
            <h4><a href="https://docs.google.com/document/d/1GtRqjSDouVMHkc4ZLZ9N_Uk4OES5IyDuAwxkwwyCJPs/edit?usp=sharing" target="_new">Download</a></h4>
            <div class="grid-container">
                <div class="grid-item">

                    <h5>Front-End Proficiencies</h5>
                    <p className="skills">HTML</p>
                    <p className="skills">CSS</p>
                    <p className="skills">JavaScript</p>
                    <p className="skills">JQuery</p>
                    <p className="skills">Responsive Design</p>
                    <p className="skills">React</p>
                    <p className="skills">Bootstrap</p>


                </div>
                <div class="grid-item">

                    <h5>Back-End Proficiencies</h5>
                    <p className="skills">API's</p>
                    <p className="skills">Node.js</p>
                    <p className="skills">Express, Express-Session</p>
                    <p className="skills">My Sequel, Sequelize</p>
                    <p className="skills">MongoDB, Mongoose</p>
                    <p className="skills">Handlebars</p>
                </div>
            </div>
        </section>
    )
}

export default Resume;
import React from 'react';

function Resume() {
    return (
        <section id="container">

            <h2>Resume</h2>
            <h4><a href="https://docs.google.com/document/d/1GtRqjSDouVMHkc4ZLZ9N_Uk4OES5IyDuAwxkwwyCJPs/edit?usp=sharing" target="_new" className="resume">Download</a></h4>
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
                    <p className="skills">Semantic Ui React</p>
                    <p className="skills">Cloudinary</p>
                    <p className="skills">Word Press Customization</p>
                </div>
                <div class="grid-item">
                    <h5>Back-End Proficiencies</h5>
                    <p className="skills">Server-side API's</p>
                    <p className="skills">Node.js</p>
                    <p className="skills">Express, Express-Session</p>
                    <p className="skills">RESTful API's</p>
                    <p className="skills">GraphQL</p>
                    <p className="skills">My Sequel, Sequelize</p>
                    <p className="skills">MongoDB, Mongoose</p>
                    <p className="skills">Handlebars</p>
                    <p className="skills">Apollo Server</p>
                    <p className="skills">Multiparty</p>
                    <p className="skills">PWA's</p>
                </div>
                <div class="grid-item">
                    <h5>Web Administration</h5>
                    <p className="skills">Google Ads</p>
                    <p className="skills">Drupal CMS</p>
                    <p className="skills">Google Adwords</p>
                    <p className="skills">Neon CMS</p>
                    <p className="skills">Help Desk</p>
                    <p className="skills">Training and Support</p>
                    <p className="skills">Bootstrap</p>
                    <br /><br /><br /><br />
                </div>
                <div class="grid-item">
                    <h5>Other Skills</h5>
                    <p className="skills">Adobe PhotoShop</p>
                    <p className="skills">Adobe Illustrator</p>
                    <p className="skills">Presentation and Meeting Facilitation</p>
                    <p className="skills">Customer Service Phones</p>
                    <p className="skills">Event Planning</p>
                </div>
            </div>
        </section>

    )
}

export default Resume;
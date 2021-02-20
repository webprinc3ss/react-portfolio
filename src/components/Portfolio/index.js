import React from 'react';
import techBlog from '../../assets/img/tech_blog.jpg';
import "../Wrapper/";
import "../Project/";

function Portfolio() {
    return (
        <section>

            <h2>Portfolio</h2>

            <p>

                <div className="wrapper">
                    <div className="card">
                        <div className="img-container">
                            <img alt="props.name" src={techBlog} />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <strong>Name:</strong>The Tech Blog
                                </li>
                                <li>
                                    <strong>Description:</strong> A full stack CMS blog designed in the MVC paradigm
                                </li>
                                <li>
                                    <strong>Technologies:</strong> JavaScript | CSS | HTML | Node.js | Express Handlebars | Express | MySql2 | BCrypt | Dotenv | Heroku
                                </li>
                                <li>
                                    <strong><a className="project-links" href="https://morning-inlet-04483.herokuapp.com/" >Deployed</a></strong> | <strong><a className="project-links" href="https://github.com/webprinc3ss/the-adventure-series">Github</a></strong>
                                </li>
                            </ul>
                        </div>
                    </div>




                </div>


            </p>
        </section>
    )
}

export default Portfolio;


// import React, { useState } from 'react';
// import Project from './components/Project';
// import Wrapper from './components/Wrapper';
// import projects from './projects.json';

// function Portfolio() {

//     const [projectList] = useState([projects])

//     return (
//         <section>
// <h2>Portfolio</h2> 
//             <Wrapper>
//                 {
//                     projectList.map(project => (
//                         <Project
//                             id={project.id}
//                             key={project.id}
//                             name={project.name}
//                             description={project.description}
//                             image={project.image}
//                             tech={project.tech}
//                             deploy={project.deploy}
//                             github={project.github}
//                         />
//                     ))
//                 }
//             </Wrapper>
//         </section>
//     )
// }

// export default Portfolio;
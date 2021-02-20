import React from 'react';

function Portfolio() {
    return (
        <section>

            <h2>Portfolio</h2>

            <p>Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
            blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
            blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
            blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
            blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
            blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
            blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
            blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
            blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
            blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah blah
            blah blah blah Blah blah blah blah blah Blah blah blah blah blah Blah
            blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah
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
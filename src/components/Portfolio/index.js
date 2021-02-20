import React, { useState } from 'react';
import Project from './components/Project';
import projects from './projects.json';

function Portfolio() {
    const [projectList, setProjectList] = useState(projects);
    return (
        <section>
            {
                projectList.map(project => (
                    <Project />
                ))
            }


        </section>
    )
}

export default Portfolio;
import React from 'react';
import Project from '../Project';
import Wrapper from '../Wrapper';
import projects from '../../projects.json';

function Portfolio() {
    return (
        <section id="container">
            <h2>Portfolio</h2>
            <Wrapper>
                {
                    projects.map(project => (
                        <Project
                            id={project.id}
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                            deploy={project.deploy}
                            github={project.github}
                        />
                    ))
                }
            </Wrapper>
        </section>
    )
}

export default Portfolio;
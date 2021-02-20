import React from 'react';

function Project(props) {
    return (
        <section>
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> {props.name}
                        </li>
                        <li>
                            <strong>Description:</strong> {props.description}
                        </li>
                        <li>
                            <strong>Technologies:</strong> {props.tech}
                        </li>
                        <li>
                            <strong><a href={props.deployed}>Deployed</a></strong>
                        </li>
                        <li>
                            <strong><a href={props.github}>Github</a></strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Project;
import React from 'react';

function Project(props) {
    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h4>
                        {props.name}
                    </h4>
                </div>
                <div className="img-container">
                    <img alt={props.name} src={"/assets/img/" + props.image} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Description:</strong> {props.description}
                        </li>
                        <li>
                            <strong>Technologies:</strong> {props.tech}<br />
                        </li>

                    </ul>
                </div>
                <div className="card-footer">
                    <h5 class="cardH5">
                        <strong><a className="project-links" href={props.deployed}>Deployed</a></strong> | <strong><a className="project-links" href={props.github}>Github</a></strong>
                    </h5>
                </div>
            </div>
        </section >
    )
}

export default Project;
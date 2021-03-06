import React from 'react';

function Project(props) {
    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h6>
                        {props.name}
                    </h6>
                </div>
                <div className="img-container">
                    <img alt={props.name} src={"https://webprinc3ss.github.io/react-portfolio/assets/img/" + props.image} />
                </div>
                <div className="content">
                    <ul className="cardLi">
                        <li>
                            <strong>Description:</strong> {props.description}
                        </li>
                        <li>
                            <strong>Technologies:</strong> {props.tech}<br />
                        </li>

                    </ul>
                </div>
                <div className="card-footer">
                    <p class="cardH6">
                        <strong><a className="project-links" href={props.deploy}>Deployed</a></strong> | <strong><a className="project-links" href={props.github}>Github</a></strong>
                    </p><p></p>
                </div>
            </div>
        </section >
    )
}

export default Project;
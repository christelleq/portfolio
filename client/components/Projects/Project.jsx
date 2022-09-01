import React from "react";

export default function Project({project, image, description, tech}) {
    return (
        <article>
            <figure>
                <img src={`/server/public/images/`+image+`.png`} alt={project}/>
            </figure>
            <h3>{project}</h3>
            {/* tech stack */}
            <p>{description}</p>
        </article>
    )
}
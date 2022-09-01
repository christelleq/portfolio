import React from "react";

export default function Project({project, image, description, tech}) {
    return (
        <article className="flex flex-col items-center">
            <figure className="sm:w-[40%]">
                <img src={`/server/public/images/`+image+`.png`} alt={project}/>
            </figure>
            <h3 className="text-xl">{project}</h3>
            {/* tech stack */}
            <p>{description}</p>
        </article>
    )
}
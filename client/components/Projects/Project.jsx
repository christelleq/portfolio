import React from "react";

export default function Project({project, image, children, filters}) {
    return (
        <article className="flex flex-col items-center">
            <figure className="w-[95%] sm:w-[60%] lg:w-[40%]">
                <img src={`/server/public/images/`+image+`.png`} alt={project}/>
            </figure>
            <h3 className="text-xl">{project}</h3>
            {/* tech stack */}
            {children}
        </article>
    )
}
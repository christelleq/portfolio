import React from "react";

export default function EducationArticle({education, place, image, children, skills}) {
    return (
        <article className="flex flex-col items-center">
            <img src={`/server/public/images/`+image+`.png`} alt={place+" logo"} className="w-[95%] sm:w-[60%] lg:w-[40%] justify-center	"/>
            <h4 className="text-xl">{education}</h4>
            <h5>{place}</h5>
            {/* tech stack */}
            {children}
        </article>
    )
}
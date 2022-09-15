import React from 'react'

export default function Project({ project, image, children }) {
  return (
    <article className="flex flex-col items-center">
      <figure className="w-[95%] sm:w-[60%] lg:w-[40%]">
        <img src={image} alt={project} />
      </figure>
      <h3 className="text-xl">{project}</h3>
      {/* tech stack */}
      {children}
    </article>
  )
}

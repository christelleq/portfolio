import React from 'react'

export default function EducationArticle({
  education,
  place,
  date,
  link,
  image,
  children,
}) {
  return (
    <article className="flex flex-col items-center">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center w-52"
      >
        <img
          src={`/server/public/images/` + image + `.png`}
          alt={place + ' logo'}
        />
      </a>
      <h4 className="text-xl">{education}</h4>
      <h5 className="text-grey-900">{place}</h5>
      <p className="text-grey-900">{date}</p>
      {/* tech stack */}
      {children}
    </article>
  )
}

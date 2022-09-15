import React from 'react'

export default function CertificateArticle({
  name,
  link,
  date,
  place,
  length,
}) {
  return (
    <article className="flex flex-col items-center pb-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex flex-row space-x-2 items-center text-align-bottom"
      >
        <p className="text-xl">{name}</p>
        <p className="text-slate-600">{date}</p>
        {/* <p>{place}</p> */}
        <p className="text-slate-600">{length}</p>
      </a>
    </article>
  )
}

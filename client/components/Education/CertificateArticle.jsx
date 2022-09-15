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
        className="flex items-center text-align-bottom"
      >
        <p className="text-xl space-x-1 group">
          <span className="group-hover:text-sky-600">{name}</span>{' '}
          <span className="group-hover:text-sky-600/50 text-gray-500 text-lg font-thin">
            {date}
          </span>
          {'  '}
          <span className="group-hover:text-sky-600/50 text-gray-500 text-lg font-thin">
            {length}
          </span>
        </p>
      </a>
    </article>
  )
}

import React from 'react'

export default function CertificateArticle({ name, link }) {
  return (
    <article className="flex flex-col items-center pb-2">
      <a
        href={`/files/` + link}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center"
      >
        <h4 className="">{name}</h4>
      </a>
      {/* <h5 className="text-grey-900">{place}</h5>
      <p className="text-grey-900">{date}</p> */}
    </article>
  )
}

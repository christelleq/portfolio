import React from 'react'

export default function Link({ link, image, name }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={image} alt={name + ` link`} width="40" className="pr-3.5" />
    </a>
  )
}

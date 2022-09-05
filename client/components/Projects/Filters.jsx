import React from 'react'

export default function Filters({ filters }) {
  return (
    <section className="flex flex-row flex-wrap space-x-2 sm:w-[60%] justify-center">
      {filters.map((skill) => (
        <p className="bg-slate-200 px-2 mb-2" key={skill}>
          {skill}
        </p>
      ))}
    </section>
  )
}

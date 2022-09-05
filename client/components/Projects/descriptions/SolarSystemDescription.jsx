import React from 'react'

export default function SolarSystemDescription() {
  return (
    <section className="w-[95%] sm:w-[60%] lg:w-[40%]">
      <p>Final (7-day) group project at Dev Academy Aotearoa</p>
      <ul className="list-disc text-left text-gray-900 pl-4 pb-1">
        <li>
          Wellbeing Lead; co-led the creation of a group well-being plan,
          conflict resolution plan, and working agreement
        </li>
        <li>
          Learned how to use new technologies not taught in the course nor known
          by facilitators using documentation and examples to implement camera
          functionality, Redux for the pause and planet focus functionalities,
          and complex routing with React Three Fiber and React
        </li>
        <li>
          Researched and executed the first steps to creating animations (planet
          rotations and orbiting) for other group members to implement
        </li>
      </ul>
      <a
        href="https://github.com/matai-2022/Team-Solar-System"
        target="_blank"
        className="underline underline-offset-2 text-sky-600"
        rel="noreferrer"
      >
        GitHub
      </a>
    </section>
  )
}

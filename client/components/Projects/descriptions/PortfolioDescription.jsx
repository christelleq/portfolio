import React from 'react'

export default function PortfolioDescription() {
  return (
    <section className="w-[95%] sm:w-[60%] lg:w-[40%] text-gray-900 space-y-1">
      <p>
        Executed project from start to finish solo: created user stories,
        wireframes and a release plan, and reflected on experience daily, all of
        which you can find in the link below
      </p>

      <a
        href="https://github.com/christelleq/portfolio"
        className="underline underline-offset-2 text-sky-600"
      >
        GitHub
      </a>
    </section>
  )
}

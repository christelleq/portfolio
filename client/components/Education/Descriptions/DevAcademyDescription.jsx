import React from 'react'
import devAcademyGraduationCertificate from '../../../../server/public/files/Christelle_Dahiyag_Quilang_Graduation_Certificate.pdf'

export default function DevAcademyDescription() {
  return (
    <section className="w-[95%] sm:w-[60%] lg:w-[40%] text-slate-900">
      <p>
        An intensive 15-week web development program preparing students to work
        effectively in software development teams. I practised mindfulness
        everyday, attended technical and human skills lectures, completed coding
        challenges solo and in pairs, and participated in 8 group projects using
        Agile methodologies and leading different parts of projects.
      </p>
      <p className="pb-1">
        In the human skills lectures, I learned about, discussed, and where
        appropriate, practised, the following topics: Agile, feedback,
        well-being, self-compassion, and handling difficult conversations.
      </p>
      <p className="pb-1">
        Feedback from facilitators includes being an ‘above-average’ student and
        being someone who would make a valuable addition to any team with
        excellence in both technical and human skills.
      </p>
      <a
        href={devAcademyGraduationCertificate}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 text-sky-600"
      >
        Graduation Certificate
      </a>
    </section>
  )
}

import React from 'react'
import DevAcademyDescription from '../Descriptions/DevAcademyDescription'
import UniversityDescription from '../Descriptions/UniversityDescription'
import EducationArticle from '../EducationArticle'
import Skills from '../Skills'
import devAcademy from '../../../../server/public/images/dev-academy.png'
import uoa from '../../../../server/public/images/uoa.png'

export default function TertiarySection() {
  return (
    <section className="pt-5 space-y-12 pb-12 pt-4">
      <h3 className="text-2xl">Tertiary Education</h3>
      <EducationArticle
        education="Web Development Bootcamp"
        place="Dev Academy Aotearoa"
        date="Apr 2022 - Jul 2022"
        link="https://devacademy.co.nz/"
        image={devAcademy}
      >
        <Skills
          skills={[
            'Full Stack Software Development',
            'Teamwork',
            'Agile',
            'Mindfulness',
            'Fast learning',
          ]}
        />
        <DevAcademyDescription />
      </EducationArticle>

      <EducationArticle
        education="Philosophy & Psychology"
        place="University of Auckland"
        date="Feb 2017 - Nov 2021"
        image={uoa}
      >
        <Skills
          skills={[
            'Critical thinking',
            'Learning complex concepts',
            'Leadership',
          ]}
        />
        <UniversityDescription />
      </EducationArticle>
    </section>
  )
}

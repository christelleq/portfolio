import React from 'react'
import CertificateArticle from './CertificateArticle'
import DevAcademyDescription from './Descriptions/DevAcademyDescription'
import NonviolentCommunicationDescription from './Descriptions/NonviolentCommunicationDescription'
import OptimizeDescription from './Descriptions/OptimizeDescription'
import UniversityDescription from './Descriptions/UniversityDescription'
import EducationArticle from './EducationArticle'
import Skills from './Skills'
import foundationsOfCloudComputing from '../../../server/public/files/Foundations_of_Cloud_Computing.pdf'
import devAcademy from '../../../server/public/images/dev-academy.png'
import uoa from '../../../server/public/images/uoa.png'
import meditatingGiraffe from '../../../server/public/images/meditating-giraffe.png'
import heroicCoach from '../../../server/public/images/heroic-coach.png'

export default function Education() {
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

      <h3 className="text-2xl">Training</h3>
      <EducationArticle
        education="Nonviolent Communication"
        place="Meditating Giraffe"
        date="Jul 2021 - Sep 2022"
        link="https://meditatinggiraffe.co.nz/"
        image={meditatingGiraffe}
      >
        <Skills
          skills={['Empathy', 'Active listening', 'Effective communication']}
        />
        <NonviolentCommunicationDescription />
      </EducationArticle>

      <EducationArticle
        education="Wisdom & Wellbeing"
        place="Heroic Coach"
        date="Jan 2021 - Present"
        link="https://christelle--heroicenterprises.thrivecart.com/optimize-premium/"
        image={heroicCoach}
      >
        <Skills
          skills={[
            'Leadership',
            'Cultivating effective habits',
            'Effective working and living',
          ]}
        />
        <OptimizeDescription />
      </EducationArticle>

      <section>
        <h3 className="text-2xl pb-4">Certificates</h3>
        <CertificateArticle
          name="Foundations of Cloud Computing"
          link={foundationsOfCloudComputing}
          date={'Sep 2022'}
          length={'1h'}
        />
      </section>
    </section>
  )
}

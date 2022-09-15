import React from 'react'
import EducationArticle from '../EducationArticle'
import NonviolentCommunicationDescription from '../Descriptions/NonviolentCommunicationDescription'
import OptimizeDescription from '../Descriptions/OptimizeDescription'
import meditatingGiraffe from '../../../../server/public/images/meditating-giraffe.png'
import heroicCoach from '../../../../server/public/images/heroic-coach.png'
import Skills from '../Skills'

export default function TrainingSection() {
  return (
    <section className="pt-5 space-y-12 pb-12 pt-4">
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
    </section>
  )
}

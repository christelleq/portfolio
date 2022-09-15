import React from 'react'
import Project from './Project'
import PortfolioDescription from './Descriptions/PortfolioDescription'
import SolarSystemDescription from './Descriptions/SolarSystemDescription'
import SharingIsCaringDescription from './Descriptions/SharingIsCaring'
import Filters from './Filters'
import portfolio from '../../../server/public/images/portfolio.png'
import solarSystem from '../../../server/public/images/solar-system.png'
import sharingIsCaring from '../../../server/public/images/sharing-is-caring.png'

export default function Projects() {
  return (
    <section className="pt-5 space-y-12 pb-12">
      <Project project="Portfolio" image={portfolio}>
        <Filters
          filters={[
            'Solo Project',
            'React',
            'Tailwind CSS',
            'Semantic HTML',
            'Vite',
            'Responsive Web Design',
          ]}
        />
        <PortfolioDescription />
      </Project>

      <Project
        project="3D Solar System"
        image={solarSystem}
        description="afkjdsfngk"
      >
        <Filters
          filters={['Group Project', 'React Three Fiber', 'React', 'Redux']}
        />
        <SolarSystemDescription />
      </Project>

      <Project
        project="Sharing is Caring"
        image={sharingIsCaring}
        description="afkjdsfngk"
      >
        <Filters
          filters={['Group Project', 'React', 'Redux', 'External APIs']}
        />
        <SharingIsCaringDescription />
      </Project>
    </section>
  )
}

import React from 'react'
import CertificatesSection from './Sections/Certificates'
import TertiarySection from './Sections/Tertiary'
import TrainingSection from './Sections/Training'

export default function Education() {
  return (
    <section className="pt-5 space-y-12 pb-12 pt-4">
      <TertiarySection />
      <TrainingSection />
      <CertificatesSection />
    </section>
  )
}

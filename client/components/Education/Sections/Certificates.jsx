import React from 'react'
import CertificateArticle from '../CertificateArticle'
import foundationsOfCloudComputing from '../../../../server/public/files/Foundations_of_Cloud_Computing.pdf'
import understandingDataEngineering from '../../../../server/public/files/Understanding_Data_Engineering.pdf'

export default function CertificatesSection() {
  return (
    <section>
      <h3 className="text-2xl pb-4">Certificates</h3>
      <CertificateArticle
        name="Foundations of Cloud Computing"
        link={foundationsOfCloudComputing}
        date={'Sep 2022'}
        length={'1h'}
      />
      <CertificateArticle
        name="Understanding Data Engineering"
        link={understandingDataEngineering}
        date={'Sep 2022'}
        length={'2h'}
      />
    </section>
  )
}

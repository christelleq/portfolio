import React from 'react'

export default function Home() {
  return (
    <section className="flex flex-col items-center pt-5 space-y-3.5">
      <h1 className="h-5/6 pt-5">Welcome to my portfolio!</h1>
      <figure>
        <img
          src="/images/giraffe-cropped.png"
          alt="Christelle Quilang"
          width="270"
        ></img>
      </figure>
      <p className="max-w-[93%] sm:max-w-[50%] md:max-w-[45%]">
        I am a Software Developer, recently graduated from Dev Academy
        Aotearoa's Web Development Bootcamp. My education includes Psychology
        and Philosophy, 40 hours of training in Nonviolent Communication, and
        cultivating wisdom and healthy habits with the Optimize Coach program.{' '}
      </p>
      <p className="max-w-[93%] sm:max-w-[50%] md:max-w-[45%]">
        I am looking for work that maximises my learning and growth in software
        development, leadership, problem-solving, and learning itself; where
        mentorship, feedback, and learning resources are available. I want to
        create meaningful, beautiful technology that serves communities. I want
        to have fun! I want to work in a safe, supportive, and creative
        environment with challenging work.
      </p>
      <p className="max-w-[93%] sm:max-w-[50%] md:max-w-[45%]">
        Please feel free to contact me with the email provided below.
      </p>
    </section>
  )
}

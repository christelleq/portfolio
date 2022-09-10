import React from 'react'
import giraffe from '../../server/public/images/giraffe.png'
import theSpeedOfTrust from '../../server/public/images/book-the-speed-of-trust.png'
import essentialism from '../../server/public/images/book-essentialism.png'
import theSevenHabits from '../../server/public/images/book-the-seven-habits.png'

export default function About() {
  return (
    <section className="flex flex-col items-center pt-6 w-[95%] sm:w-[60%] pb-12">
      <article className="space-y-6">
        <h3 className="text-xl underline underline-offset-2">My Values</h3>
        <section>
          <h4 className="text-lg font-bold">Effectiveness</h4>
          <p className="text-slate-900">
            I value effectiveness, as evident in my involvement in the{' '}
            <a href="https://www.effectivealtruism.org/">Effective Altruism</a>{' '}
            movement, the Heroic Coach self development program, Nonviolent
            Communication training (effective communication), and my favourite
            books (see below).
          </p>
        </section>

        <section>
          <h4 className="text-lg font-bold">Trust</h4>
          <p className="text-slate-900">
            Heavily influenced by the book The Speed of Trust, I see that trust
            is the backbone of success in all parts of life. I recognise that at
            the base of my effectiveness in my personal and professional
            relationships and my reputation is{' '}
            <strong>trust with myself</strong>. So, I continuously make and keep
            meaningful and achievable promises to myself. To gain potential
            employers' trust, I am improving my competence by gaining relevant
            certificates and creating relevant projects (like this portfolio
            you're looking at - made by me!)
          </p>
        </section>

        <section>
          <h4 className="text-lg font-bold">
            Relationships & Community Wellbeing
          </h4>
          <p className="text-slate-900">
            I really value my relationships, and it should be no surprise that I
            read up on these too! My favourite books include The Seven
            Principles for Making Marriage Work*, Fidelity, and The Power of
            Showing Up. A big part of why I am participating in the Heroic Coach
            program is to become an exemplar of wisdom, health, and
            effectiveness for my family.
          </p>
          <p className="text-slate-600">
            *I'm not even married, I just care about effectiveness that much!
            This book provides an intuitive and evidence-based framework for
            what makes romantic relationships work.
          </p>
        </section>

        <figure className="flex flex-col pt-10">
          <img src={giraffe} alt="Christelle with a giraffe" />
          <caption className="text-xs text-slate-600 leading-4 pt-1	">
            Christelle with a giraffe! The giraffe is the spirit animal of
            Nonviolent Communication. The giraffe has the biggest heart of all
            mammals, representing kindness. With their long necks, they are able
            to see the whole forest, representing perspective. Giraffes are able
            to eat from the thorny acacia tree. One of the aims as an NVC
            practitioner is to be able to hear one's needs, no matter if they
            are practicing NVC or not.{' '}
          </caption>
        </figure>
      </article>

      <article className="pt-10">
        <h3 className="mb-2 text-xl underline underline-offset-2">
          My Favourite Books
        </h3>
        <section className="grid grid-rows-1 md:grid-cols-3 items-center gap-2">
          <img
            src={theSpeedOfTrust}
            alt="The Speed of Trust"
            className="justify-center"
          />
          <img src={essentialism} alt="Essentialism" />
          <img
            src={theSevenHabits}
            alt="The Seven Habits of Highly Effective People"
          />
        </section>
        <p>
          Past favourites include books by Cal Newport (effective working),
          Marshall Rosenberg (NVC), Oren Jay Sofer (NVC), Thich Nhat Hanh
          (Fidelity; mindfulness and Buddhism), and Liz Wiseman (Multipliers -
          leadership book).
        </p>
      </article>

      <p className="pt-10">
        Thank you for reading! I hope this gives you some insight into who I am
        as a human being.
      </p>
      <p>
        Feel free to contact me to chat about my interests in the email provided
        below!{' '}
      </p>
    </section>
  )
}

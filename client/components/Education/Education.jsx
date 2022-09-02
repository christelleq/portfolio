import React from "react";
import EducationArticle from "./EducationArticle";
import Skills from "./Skills"

export default function Education() {
    // console.log(<Skills skills={['Full Stack Software Development', 'Teamwork', 'Agile', 'Mindfulness', 'Fast Learning']}/>)
    return (
        <section className="pt-5 space-y-12 pb-12 pt-4">
            <h3 className="text-2xl">Tertiary Education</h3>
            <EducationArticle education="Web Development Bootcamp" place="Dev Academy Aotearoa" image="dev-academy">
                <Skills skills={['Full Stack Software Development', 'Teamwork', 'Agile', 'Mindfulness', 'Fast Learning']}/>
            </EducationArticle>
            <EducationArticle education="Philosophy & Psychology" place="University of Auckland" image="uoa" skills={['Critical Thinking', 'Learning complex concepts', 'Leadership']}></EducationArticle>

            <h3 className="text-2xl">Training</h3>
            <EducationArticle education="Nonviolent Communication" place="Meditating Giraffe" image="meditating-giraffe" skills={['Empathy', 'Active Listening', 'Effective communication']}></EducationArticle>
            <EducationArticle education="Wisdom & Wellbeing" place="Heroic Coach" image="heroic-coach" skills={['Leadership', 'Cultivating effective habits', 'Effective working and living']}></EducationArticle>

            <h3 className="text-2xl">Certificates</h3>
            <p>Coming soon...</p>
        </section>
    )
}
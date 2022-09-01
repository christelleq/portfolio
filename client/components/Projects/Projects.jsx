import React from "react";
import Project from "./Project";
import PortfolioDescription from "./descriptions/PortfolioDescription"

export default function Projects() {
    return (
        <section className="pt-5 space-y-9">
            <Project project="Portfolio" image="portfolio" filters={['Solo Project', 'React', 'Tailwind CSS', 'Vite']}>
                <PortfolioDescription/>
            </Project>
            <Project project="3D Solar System" image="solar-system" description="afkjdsfngk" filters={['Group Project', 'React Three Fiber', 'React', 'Redux', 'Vite']}/>
            <Project project="Sharing is Caring" image="sharing-is-caring" description="afkjdsfngk" filters={['Group Project', 'React', 'Redux', 'SQLite']}/>
        </section>
    )
}
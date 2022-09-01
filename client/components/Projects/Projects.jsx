import React from "react";
import Project from "./Project";
import PortfolioDescription from "./descriptions/PortfolioDescription"
import SolarSystemDescription from "./descriptions/SolarSystemDescription";
import SharingIsCaringDescription from "./descriptions/SharingIsCaring";

export default function Projects() {
    return (
        <section className="pt-5 space-y-12 pb-12">
            <Project project="Portfolio" image="portfolio" filters={['Solo Project', 'React', 'Tailwind CSS', 'Vite']}>
                <PortfolioDescription/>
            </Project>
            <Project project="3D Solar System" image="solar-system" description="afkjdsfngk" filters={['Group Project', 'React Three Fiber', 'React', 'Redux', 'Vite']}>
                <SolarSystemDescription/>
            </Project>
            <Project project="Sharing is Caring" image="sharing-is-caring" description="afkjdsfngk" filters={['Group Project', 'React', 'Redux', 'SQLite']}>
                <SharingIsCaringDescription/>
            </Project>
        </section>
    )
}
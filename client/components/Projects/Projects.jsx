import React from "react";
import Project from "./Project";

export default function Projects() {
    return (
        <section className="pt-5 space-y-9">
            <Project project="Portfolio" image="portfolio" description="afkjdsfngk" tech={[]}/>
            <Project project="3D Solar System" image="solar-system" description="afkjdsfngk" tech={[]}/>
            <Project project="Sharing is Caring" image="sharing-is-caring" description="afkjdsfngk" tech={[]}/>
        </section>
    )
}
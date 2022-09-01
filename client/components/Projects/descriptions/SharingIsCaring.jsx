import React from "react";

export default function SharingIsCaringDescription() {
    return (
        <section className="w-[95%] sm:w-[60%] lg:w-[42%]">
            <p>1-day group project at Dev Academy Aotearoa</p>
            <ul className="list-disc text-left text-gray-900 pl-4 pb-1">
                <li>Redux Lead; pair-programmed to set up Redux</li>
                <li>Implemented solo the random reviews feature using an external API, and the humorous delete button</li>
                <li>Provided technical support to team members, including unblocking an issue with using Redux in React components</li>
            </ul>  
            <a href="https://github.com/matai-2022/sharingIsCaring" className="underline underline-offset-2 text-sky-600">GitHub</a>
        </section>

    )
}
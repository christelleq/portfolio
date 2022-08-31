import React from "react";

export default function Home() {
    return (
        <section className="flex flex-col items-center pt-5 space-y-3.5">
            <h1 className="h-5/6 pt-5">Welcome to my portfolio!</h1>
            <figure>
                <img src="/server/public/images/giraffe-cropped.png" alt="Christelle Quilang" width="270"></img>
            </figure>
            <p className="max-w-[93%] sm:max-w-[50%] md:max-w-[45%]">I am a Software Developer, recently graduated from Dev Academy Aotearoa's Web Development Bootcamp. My education includes Psychology and Philosophy at the University of Auckland, over 40 hours of training in Nonviolent Communication, and cultivating wisdom and healthy habits with the Optimize Coach program.  </p>
            <p className="max-w-[93%] sm:max-w-[50%] md:max-w-[45%]">In my first software development role, firstly, I am looking for work that maximises my learning and growth in software development, leadership, and Agile practices; where mentorship and learning resources are available. Secondly, I want to create meaningful, beautiful technology that serves communities. Last but not the least, I want to have fun! I want to work in a safe, supportive, and creative environment.</p>
            <p className="max-w-[93%] sm:max-w-[50%] md:max-w-[45%]">Please feel free to contact me with the email provided below.</p>
        </section>
    )
}
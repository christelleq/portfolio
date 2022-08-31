import React from "react";

export default function Home() {
    return (
        <section className="flex flex-col items-center pt-5 space-y-3.5">
            <h1 className="h-5/6 pt-5">Welcome to my portfolio!</h1>
            <figure>
                <img src="/server/public/images/giraffe-cropped.png" alt="Christelle Quilang" width="270"></img>
            </figure>
            <p className="sm:max-w-[50%]">I am a Software Developer, recently graduated from Dev Academy Aotearoa's Web Development Bootcamp. My education includes Psychology and Philosophy at the University of Auckland, over 40 hours of training in Nonviolent Communication, and cultivating wisdom and healthy habits with the Optimize Coach program.  </p>
        </section>
    )
}
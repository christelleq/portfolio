import React from "react";

export default function Skills({skills}) {        
    return (
        <section>
            {skills.map((skill)=> 
            <button key={skill}>{skill}</button>
            )}
        </section>
)}
import React from "react";

export default function Link({link, name}) {
    return (
        <a href={link} target="_blank"><img src={`/server/public/images/`+name+`.png`} alt={name+` link`} width="40" className="pr-3.5"/></a>
    )
}
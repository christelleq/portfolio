import React from "react";

export default function Link({link, name}) {
    return (
        <a href={link}><img src={`/server/public/images/`+name+`.png`} alt={name} width="40"/></a>
    )
}
import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="grid grid-rows-1 md:grid-cols-3 pt-4 md:pt-7 lg:max-w-[60%] gap-y-2 lg:gap-x-40 md:gap-x-20">
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About Me</NavLink>
        </nav>
    )
}
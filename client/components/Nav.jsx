import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex flex-row justify-center gap-x-32 items-center pt-4 font-semibold">
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About Me</NavLink>
        </nav>
    )
}
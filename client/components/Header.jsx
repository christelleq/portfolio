import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col pt-5">
            <Link to="/" className="text-5xl font-medium">Christelle Quilang</Link>
            <Link to="/" className="text-2xl">Software Developer</Link>
        </header>
    )
}
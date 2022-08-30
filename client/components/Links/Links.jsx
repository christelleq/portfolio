import React from "react";
import Link from "./Link";

export default function Links() {
    return (
        <div className="flex justify-center">
            <Link name="github" link="https://github.com/christelleq"/>
            <Link name="linkedin" link="https://linkedin.com/in/christelle-quilang"/>
            <Link name="mail" link="mailto:christellequilang@protonmail.com"/>
        </div>
    )
}
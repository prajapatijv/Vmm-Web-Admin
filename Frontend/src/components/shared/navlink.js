import React from "react"
import { Link } from "@reach/router"

const NavLink = ({activeClassName, ...props}) => 
<Link
    {...props}
    getProps={({ isCurrent }) => {
        return {
            className:  isCurrent ? `${props.className} ${activeClassName}` : props.className
        }
    }}
/>

export default NavLink
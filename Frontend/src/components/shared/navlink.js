import React from "react"
import PropTypes from 'prop-types'
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

NavLink.propTypes = {
    activeClassName: PropTypes.string,
    className: PropTypes.string,
}
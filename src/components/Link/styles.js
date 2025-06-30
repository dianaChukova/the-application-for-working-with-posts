import styled, {css} from "styled-components"
import { Link, NavLink } from "react-router-dom"

const LinkStyle = css`
    color: black;
    text-decoration: none;

    &:hover {
        color: darkred;
        text-decoration: underline;
    }
`

export const SimpleLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 17px;
    border: 2px solid black;
    padding: 3px;


    &:hover {
        color: darkred;
        text-decoration: underline;
    }
`

export const NavigationLink = styled(NavLink)`${LinkStyle}`
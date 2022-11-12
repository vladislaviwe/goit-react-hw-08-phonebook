import styled from "styled-components";

export const Header = styled.header`
    margin-bottom: 20px;
`

export const AuthMenu = styled.nav`
    width: 150px;
    margin-left: auto;

    & a {
        text-decoration: none;
        color: black;
        transform: scale(1);

        &.active {
            color: crimson;
        }
    }

    & a:hover {
        opacity: 0.7;
    }
`

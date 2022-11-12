import styled from "styled-components";

export const LabelText = styled.p`
    margin: 0;
`

export const Input = styled.input`
    border-radius: 5px;
    opacity: 50%;


    &:hover, &:focus {
        opacity: 40%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }
`
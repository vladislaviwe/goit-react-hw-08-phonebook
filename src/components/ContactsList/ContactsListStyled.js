import styled from "styled-components";

export const List = styled.ol`
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 5px;
    }
`